"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: {
  glassType: string;
  brand: string;
  model: string;
  licensePlate: string;
  year: string;
  insurance: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  try {
    const toEmail = process.env.CONTACT_EMAIL || "contact@zen-glass.com";
    
    // Formatting the email content
    const htmlContent = `
      <h2>Nouvelle demande de rendez-vous : Zen Glass</h2>
      <p><strong>Type d'intervention :</strong> ${formData.glassType}</p>
      
      <h3>1. Informations du véhicule</h3>
      <ul>
        <li><strong>Marque :</strong> ${formData.brand}</li>
        <li><strong>Modèle :</strong> ${formData.model}</li>
        <li><strong>Immatriculation :</strong> ${formData.licensePlate}</li>
        <li><strong>Année :</strong> ${formData.year}</li>
        <li><strong>Assurance :</strong> ${formData.insurance}</li>
      </ul>

      <h3>2. Coordonnées du client</h3>
      <ul>
        <li><strong>Nom :</strong> ${formData.name}</li>
        <li><strong>Téléphone :</strong> ${formData.phone}</li>
        <li><strong>Email :</strong> ${formData.email}</li>
      </ul>

      <h3>3. Message supplémentaire</h3>
      <p>${formData.message || "Aucun message supplémentaire."}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Zen Glass Website <onboarding@resend.dev>", // onboarding@resend.dev allows sending to verified domain only in free tier
      to: [toEmail],
      replyTo: formData.email,
      subject: `[ZEN GLASS] Nouvelle Demande - ${formData.name} (${formData.licensePlate})`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return { success: false, error: error.message || "Une erreur est survenue lors de l'envoi de l'e-mail." };
  }
}
