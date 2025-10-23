"use client";

export default function Address({ streetName, town, city, postCode }) {
  return (
    <address className="text-white not-italic ">
      <p>Llynclys Hall</p>
      <p>Oswestry</p>
      <p>SY10 8AD</p>
    </address>
  );
}
