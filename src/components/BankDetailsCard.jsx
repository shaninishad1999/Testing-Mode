import React from "react";
import Logo from "../../public/logo.png";

const BankDetailsCard = () => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="rounded-lg bg-white shadow-lg">
        <div className="px-14 py-2">
          <div className="mb-6 flex items-center justify-center">
            <img src={Logo} alt="Axis Bank Logo" className="h-10" />
          </div>

          <div className="space-y-0 ">
            <div className="leading-5">
            <h2 className="text-xl font-bold uppercase ">
                <u className="underline decoration-1.1 underline-offset-4">Mukesh Kumbhare</u>
              </h2>
              <p className="text-black">Joint Holder: - -</p>
            </div>

            <div className="flex justify-between gap-4">
              <div className="leading-4 space-y-1">
                <p className="uppercase">
                  Goodluck Building Tikri Sector 48 Gurgaon
                </p>
                <p className="uppercase">Gurgaon Goodluck Building</p>
                <p className="uppercase">Gurgaon</p>
                <p className="uppercase">Haryana-India</p>
                <p>122001</p>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-end leading-3">
                  <p className="text-sm text-black">Customer ID :</p>
                  <p>887602950</p>
                </div>
                <div className="flex items-center justify-end leading-3">
                  <p className="text-sm text-black">IFSC Code :</p>
                  <p>UTIB0000054</p>
                </div>

                <div className="flex items-center justify-end leading-3">
                  <p className="text-sm text-black">MICR Code :</p>
                  <p>110211009</p>
                </div>
                <div className="flex items-center justify-end leading-3">
                  <p className="text-sm text-black">Nominee Registered : </p>
                  <p>&nbsp;Y</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4 leading-3 items-end ">
              <div>
                <div className="flex items-center">
                  <p className="text-sm text-black">Registered Mobile No :</p>
                  <p>XXXXXX8387</p>
                </div>

                <div className="flex items-center  justify-end">
                  <p className="text-sm text-black">Registered Email ID :</p>
                  <p>MUXXXX48@GMAIL.COM</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-black">Scheme :</p>
                  <p>EASY ACCESS SALARY ACCOUNT</p>
                </div>
              </div>

              <div className="">
                <div className="flex items-center justify-end leading-3">
                  <p className="text-sm text-black">PAN :</p>
                  <p>HOIPK3086C</p>
                </div>
                <div className="flex items-center justify-end leading-3">
                  <p className="text-sm text-black">CKYC NUMBER :</p>
                  <p>XXXXXXXXXX4335</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsCard;
