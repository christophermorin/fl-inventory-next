"use client";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react"
// Org name
// Location
// Website?
// Socials - accordian
// Description
// Area of work? Speciallty?

type FormValues = {
  organization: string;
};

export default function CreateOrgForm({ userId }: { userId: string | null }) {
  const { data: session, status, update } = useSession()
  const [formValues, setFormValues] = useState<FormValues>({
    organization: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const payload = {
      userId,
      ...formValues,
    };
    try {
      const res = await axios.post(
        `${API_URL}api/organization_setup/create`,
        payload
      );
      update({roles: "admin", organization: formValues.organization})
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="organization"
          placeholder="Organization name"
          value={formValues.organization}
          onChange={(e) => setFormValues({ organization: e.target.value })}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
