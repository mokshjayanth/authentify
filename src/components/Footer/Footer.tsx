import "./Footer.css";

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="container" style={{margin:"10px", display:"inline-block"}}>
        <div className="row">
            <h6>About</h6>
            <p className="text-justify">
              Authentify.com <i> ALWAYS ANTI-COUNTERFIET - </i> is an initiative to
              help the people to know what product they consume are infact genuine products sourced directly from their trusted vendors. Authentify focuses on
              providing the most efficient and simple way to identify counterfiet products. We will help people build trust in the product they use and we'll help business brands
              to create that trust in their customers.
            </p>
        </div>
        <hr />
      </div>
      <div className="container" style={{margin:"5px"}}>
        <div className="row">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by <a href="#">Authentify</a>.
            </p>
        </div>
      </div>
    </div>
  );
}
