import "./footer.css";
import { linksFooter } from "../../data/footer-link";
import { contact } from "../../data/contact";
const Footer = () => {
  return (
    <footer id="contact">
      <div className="first-footer">
        <ul>
          <li>
            <h4>Conctat</h4>
            <ul>
              {contact.map((element) => {
                return (
                  <li key={"e" + element.id}>
                    {element.icon} <span>{element.value}</span>
                  </li>
                );
              })}
            </ul>
          </li>
          {linksFooter.map((link) => {
            return (
              <li key={link.id} className="secondary-li">
                <h4>{link.title}</h4>
                <ul>
                  {link.links.map((item) => {
                    return <li key={item.id}>{item.text}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="second-footer">
        <p>OPGI - BOUMERDES</p>
        <h5>2022 © Copyrights</h5>
      </div>
    </footer>
  );
};
export default Footer;
