<script module lang="ts">
	let captchaReady: Promise<void> | undefined;

	function loadCaptcha() {
		captchaReady ??= new Promise((resolve) => {
			window.hcaptchaOnLoad = () => resolve();
			const script = document.createElement('script');
			script.src =
				'https://js.hcaptcha.com/1/api.js?render=explicit&onload=hcaptchaOnLoad&recaptchacompat=off';

			script.async = true;
			document.head.append(script);
		});
		return captchaReady;
	}
</script>

<script lang="ts">
	const accessKey = 'ca76b600-fec1-4e8f-9832-18bbfc960cae';
	const hcaptchaSitekey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let captchaId: string | undefined;

	function hcaptcha(node: HTMLElement) {
		loadCaptcha().then(() => {
			captchaId = window.hcaptcha?.render(node, { sitekey: hcaptchaSitekey, theme: 'dark' });
		});
	}

	async function handleSubmit(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
		event.preventDefault();
		const form = event.currentTarget;
		status = 'sending';

		try {
			const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
			const result = await response.json();
			if (!result.success) throw new Error(result.message);

			form.reset();
			status = 'sent';
		} catch {
			status = 'error';
		} finally {
			if (captchaId) window.hcaptcha?.reset(captchaId);
		}
	}
</script>

<section id="contact" class="section">
	<div class="mx-auto max-w-7xl">
		<div class="flex flex-col justify-between gap-14 md:flex-row">
			<div class="flex-1">
				<h2 class="mb-4!">Get in Touch</h2>
				<p class="mb-8 leading-7 text-tertiary">
					General questions, collabs, guest spots, or book a tattoo? Message the shop below and
					we'll get back to you. If you know what artist you want, book with them directly.
				</p>
				<form
					action="https://api.web3forms.com/submit"
					method="POST"
					onsubmit={handleSubmit}
					class="flex flex-col gap-3.5"
				>
					<input type="hidden" name="access_key" value={accessKey} />
					<input type="checkbox" name="botcheck" class="hidden" />
					<div class="flex gap-3.5">
						<input type="text" name="name" placeholder="Name" required />
						<input type="email" name="email" placeholder="Email" required />
					</div>
					<input type="text" name="subject" placeholder="Subject" required />
					<textarea name="message" class="h-30 resize-none" placeholder="Message" required
					></textarea>
					<div class="flex flex-wrap gap-4">
						<div {@attach hcaptcha} class="h-16 w-60 origin-top-left scale-80"></div>

						<button type="submit" class="btn-primary flex-1" disabled={status === 'sending'}>
							{status === 'sending' ? 'Sending...' : 'Send Message'}
						</button>
					</div>
					{#if status === 'sent'}
						<p class="text-primary">Thanks! We'll get back to you soon.</p>
					{:else if status === 'error'}
						<p class="text-tertiary">
							Something went wrong. Please try again or email us at cursedinksociety@gmail.com.
						</p>
					{/if}
				</form>
			</div>
			<div class="flex-1">
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.898653055887!2d-90.75552162381943!3d29.606632275147042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86211b6acd452111%3A0x1b0d724b4fc8af51!2sCursed%20Ink%20Society!5e0!3m2!1sen!2sus!4v1785042588874!5m2!1sen!2sus"
					width="600"
					height="450"
					style="width: 100%; height: 100%; min-height: 260px; border: 0px; filter: invert(0.92);"
					loading="lazy"
					referrerpolicy="strict-origin-when-cross-origin"
				></iframe>
			</div>
		</div>
	</div>
</section>

<style>
	input,
	textarea {
		background: #101010;
		border: 1px solid #262626;
		width: 100%;
		padding: 14px;
		color: var(--color-primary);
	}
</style>
