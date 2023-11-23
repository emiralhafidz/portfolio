import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2>CONTACT</h2>
        <div className="textDesc1">
          <b>I'm always open for new and interesting opportunities. Maybe we're a
          match?</b>
        </div>
        <div className="textDesc2">
          Let's have a chat and I can show you how I can bring impact to your
          company.
        </div>
        <hr />
        <div className="contactBtn">
          <button>Copy email address</button>
          <button>Linkedin</button>
          <button>Twitter</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
