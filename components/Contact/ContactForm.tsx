'use client';
import { useForm, ValidationError } from '@formspree/react';
import FormInput from '../Form/FormInput';
import FormTextarea from '../Form/FormTextarea';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = ({ data }) => {
  const siteKey: string = process.env.GOOGLE_RECAPTCHA_SITE_KEY;
  const { form, announcement } = data;
  const [state, handleSubmit] = useForm('mayzzaqv');
  if (state.succeeded) {
    return (
      <div
        className="border-t border-b border-blue-500 bg-blue-100 px-4 py-3 text-blue-700"
        role="alert"
      >
        <p className="font-bold">{announcement?.title}</p>
        <p className="text-sm">{announcement?.message}</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      {' '}
      {form?.inputs?.map((input, i) => (
        <div className="form-group mb-6" key={i}>
          <FormInput data={{ input: input }} />
          <ValidationError
            prefix={input?.label}
            field={input?.name}
            errors={state.errors}
          />
        </div>
      ))}{' '}
      {form?.textareas?.map((textarea, i) => (
        <div className="form-group mb-0-6" key={i}>
          <FormTextarea data={{ textarea: textarea }} />
          <ValidationError
            prefix={textarea?.label}
            field={textarea?.name}
            errors={state.errors}
          />
        </div>
      ))}{' '}
      <div className="my-6">
        <ReCAPTCHA size="normal" sitekey={siteKey} />
      </div>
      <button
        type="submit"
        className="flex 
				 w-full
				 items-center
				 justify-center
				 bg-primary
				 px-6
				 py-2.5
				 text-white
				 shadow-md transition
				 duration-150 ease-in-out hover:bg-primary-title-dark hover:shadow-lg
				 focus:bg-primary-title-dark focus:shadow-lg
				 focus:outline-none
				 focus:ring-0
				 active:bg-blue-800 active:shadow-lg"
        title={form?.submitLabel}
      >
        {' '}
        {form?.submitLabel}{' '}
      </button>
    </form>
  );
};

export default ContactForm;
