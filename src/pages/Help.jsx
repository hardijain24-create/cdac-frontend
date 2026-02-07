import {
  Search,
  Settings,
  Bell,
  MessageCircle,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function Help() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="help-container">
          <div className="help-card">
            <div className="help-icon">
              <MessageCircle size={48} />
            </div>

            <h2 className="page-title">Help</h2>
            <p className="help-subtitle">
              Let’s make learning seamless together!
            </p>
            <p className="help-description">
              Reach out to GenesisEdu today.
            </p>

            {/* Help Form */}
            <form className="help-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="form-group">
                <label>What do you want to know?</label>
                <textarea
                  placeholder="Type your question here..."
                  rows="4"
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>

            {/* Contact Methods */}
            <div className="contact-methods">
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 12345 67890</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>gkmavani@gmail.com</span>
              </div>
              <div className="contact-item">
                <MessageCircle size={18} />
                <span>Telegram</span>
              </div>
              <div className="contact-item">
                <Globe size={18} />
                <span>Website</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
