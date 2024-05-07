"use client";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData: Inputs) => {
    window.location.href = `mailto:orestasksanas13@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl 
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-6 uppercase tracking-[20px] text-[#AEC3B0] text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6">
        <h4 className="text-base sm:text-4xl font-semibold text-center">
          Have any questions?{" "}
          <span className="underline decoration-[#EFF6E0]/50">Lets talk!</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#AEC3B0] h-7 w-7 animate-pulse" />
            <a
              className="text-md sm:text-2xl"
              href="tel:+37064745605"
              target="_blank"
              rel="noopener noreferrer"
            >
              +37064745605
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#AEC3B0] h-7 w-7 animate-pulse" />
            <a
              className="text-md sm:text-2xl"
              href="mailto:orestasksanas13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              orestasksanas13@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#AEC3B0] h-7 w-7 animate-pulse" />
            <p className="text-md sm:text-2xl">
              Lithuania, Radviliškio r., Vėriškiai
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[80%] sm:w-fit mx-auto"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:space-x-2 justify-center">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#124559] py-2 sm:py-5 sm:px-10 rounded-md text-[#E0E6E2] font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
