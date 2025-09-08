"use client";

export default function Address({ streetName, town, city, postCode }) {
  return (
    <address className="text-slate-800 text-2xl not-italic ">
      <p className="font-semibold">{streetName}</p>
      <p>{town}</p>
      <p>{city}</p>
      <p>{postCode}</p>
    </address>
  );
}
