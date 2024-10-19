"use client";
import Button from "@components/shared/atoms/Button";
import contactContent from "@dictionaries/contact.content";
import { isValidEmail, isValidPhone } from "@utils/functions";
import React, { createRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useLoadingState } from "src/context/LoadingContext";
import TextInput from "@atoms/Inputs/TextInput";
import TextareaInput from "@atoms/Inputs/TextreaInput";

export interface IFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  object?: string;
  message?: string;
}

function Contact({ params }: { params: { lang: string } }) {
  const dictionary = contactContent[params.lang];
  const [formData, setFormData] = useState<IFormData>({});
  const [errors, setErrors] = useState<string[]>([]);
  const { setIsLoading } = useLoadingState();
  const recaptchaRef = createRef<any>();

  const checkErrors = () => {
    const errors = [];
    const { firstName, lastName, email, phone, object, message } = formData;

    if (!firstName) errors.push("firstName");
    if (!lastName) errors.push("lastName");
    if (!email || !isValidEmail(email)) errors.push("email");
    if (!phone || !isValidPhone(phone)) errors.push("phone");
    if (!object) errors.push("object");
    if (!message) errors.push("message");
    return errors;
  };

  const sendMail = () => {
    setIsLoading(true);
    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          setFormData({});
          toast.success(dictionary.responseMessage.success);
        } else {
          toast.success(dictionary.responseMessage.error);
        }
      })
      .catch(() => {
        setIsLoading(false);
        toast.success(dictionary.responseMessage.error);
      });
  };

  const handleSubmit = () => {
    const errors = checkErrors();
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      setErrors([]);
      recaptchaRef.current.execute();
    }
  };

  const onReCAPTCHAChange = (captchaCode?: string | null) => {
    if (!captchaCode) {
      return;
    }

    sendMail();
    recaptchaRef.current.reset();
  };

  const handleChange = (slug: keyof IFormData, value: any) => {
    setFormData({ ...formData, [slug]: value });
  };

  useEffect(() => {
    if (errors.length) {
      const elements = document.getElementsByClassName("error");
      if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [errors]);

  const handleKeyPress = (id: string) => {
    if (errors.includes(id)) setErrors(errors.filter((e) => id !== e));
  };

  return (
    <div>
      <h1>{dictionary.title}</h1>
      <div className="flex flex-col gap-3">
        <TextInput
          required
          onKeyDown={() => handleKeyPress("firstName")}
          id="firstName"
          label={dictionary.formLabels["firstName"]}
          error={errors.some((e) => e === "firstName")}
          value={formData.firstName ?? ""}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
        <TextInput
          required
          onKeyDown={() => handleKeyPress("lastName")}
          id="lastName"
          label={dictionary.formLabels["lastName"]}
          error={errors.some((e) => e === "lastName")}
          value={formData.lastName ?? ""}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
        <TextInput
          required
          onKeyDown={() => handleKeyPress("email")}
          id="email"
          label={dictionary.formLabels["email"]}
          error={errors.some((e) => e === "email")}
          value={formData.email ?? ""}
          placeholder="example@email.fr"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <TextInput
          required
          onKeyDown={() => handleKeyPress("phone")}
          id="phone"
          label={dictionary.formLabels["phone"]}
          error={errors.some((e) => e === "phone")}
          value={formData.phone ?? ""}
          placeholder="06xxxxxxxx"
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <TextInput
          required
          onKeyDown={() => handleKeyPress("object")}
          id="object"
          label={dictionary.formLabels["object"]}
          error={errors.some((e) => e === "object")}
          value={formData.object ?? ""}
          onChange={(e) => handleChange("object", e.target.value)}
        />
        <TextareaInput
          required
          onKeyDown={() => handleKeyPress("message")}
          id="message"
          label={dictionary.formLabels["message"]}
          error={errors.some((e) => e === "message")}
          value={formData.message ?? ""}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ""}
          onChange={onReCAPTCHAChange}
        />
        {errors.length > 0 && (
          <p className="text-red-500">
            Veuillez remplir correctement tous les champs.
          </p>
        )}
        <Button template="secondary" onClick={handleSubmit}>
          ENVOYER
        </Button>
      </div>
    </div>
  );
}

export default Contact;
