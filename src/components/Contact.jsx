import { contact } from "../data/portfolio";

export default function Contact({ dialogRef, onClose }) {
  return (
    <dialog ref={dialogRef} aria-labelledby="gtt" onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <h2 id="gtt" className="dialog-title">Get in touch</h2>
      <ContactLinks />
      <button className="btn" onClick={onClose}>Close</button>
    </dialog>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-wrap">
        <h2>Let's talk</h2>
        <p>Have a project, a role or a process problem in mind? Reach me any of these ways.</p>
        <ContactLinks />
      </div>
    </section>
  );
}

function ContactLinks() {
  return (
    <div className="ct">
      <a href={contact.phoneHref}><span>Phone</span>{contact.phone}</a>
      <a href={`mailto:${contact.email}`}><span>Email</span>{contact.email}</a>
      <a href={contact.linkedinHref} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>{contact.linkedin}</a>
    </div>
  );
}
