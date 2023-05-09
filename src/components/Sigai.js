import React from "react";
import { FaHandshake } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";

export default function Sigai() {
  return (
    <React.Fragment>
      <div className="container my-5">
        <p>
          The mission of the ACM Special Interest Group on Artificial
          Intelligence (ACM SIGAI) is to promote and support the growth and
          application of artificial intelligence (AI) principles and techniques
          throughout computing. ACM SIGAI is made up of and serves three primary
          communities: academic educators and researchers, professional
          practitioners, and students. We serve as technical experts both to the
          internal community of the ACM as well as to external entities
          interested in AI. We advance our mission through concrete activities,
          including:
        </p>
        <ol>
          <li>
            Sponsoring or co-sponsoring high-quality AI-related conferences.
          </li>
          <li>
            Recognizing achievements of academic, professional and student
            members through major annual awards.
          </li>
          <li>
            Publishing a quarterly newsletter (AI Matters) in the ACM Digital
            Library as well as maintaining a blog on AI matters of interest to
            the community
          </li>
          <li>
            Providing scholarships to student members to attend conferences
          </li>
          <li>
            Funding, developing, and promoting AI education, publications and
            public outreach activities both within the AI community and beyond.
          </li>
        </ol>
        <p>
          By joining ACM:SIGAI both students and professional members receive
          the same benifits:
        </p>
        <ul>
          <li>
            access in the ACM Digital Library to the Proceedings of all the
            SIGAI sponsored conferences and many in-cooperation conferences
          </li>
          <li>discounts on registration at SIGAI sponsored conferences.</li>
          <li>
            networking and leadership opportunities through SIGAI activities,
            student and professional chapter meetings, and the ACM student
            website.
          </li>
          <li>
            opportunities for support to attend conferences sponsored by SIGAI
            to present a paper. Contact the conference chair for details.
          </li>
          <li>
            mentoring for PhD students by senior researchers at some conferences
            sponsored by SIGAI and at the AAAI/SIGAI Doctoral Consortium.
          </li>
        </ul>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div
                className="text-center"
                style={{
                  border: "solid 1px",
                  padding: "10px",
                  borderRadius: "30px",
                }}
              >
                <div>
                  <i>
                    AI is increasingly an interdisciplinary area, and your
                    membership supports these goals.
                  </i>
                </div>
                <a
                  type="button"
                  target="blank"
                  href="https://services.acm.org/public/qj/gensigqj/gensigqj_control.cfm?promo=PWEBTOP&offering=003&form_type=SIG"
                  className="btn btn-outline-info my-3"
                >
                  Join Now <FaHandshake className="icon" />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="text-center"
                style={{
                  border: "solid 1px",
                  padding: "10px",
                  borderRadius: "30px",
                }}
              >
                <i>
                  Both members and non-members are welcome to join our mailing
                  list to receive timely announcements of interest to
                  researchers and practitioners.
                </i>
                <div>
                  <a
                    type="button"
                    target="blank"
                    href="https://listserv.acm.org/SCRIPTS/WA-ACMLPX.CGI?SUBED1=SIGAI-ANNOUNCE&A=1&SUBED1=SIGAI-ANNOUNCE&A=1"
                    className="btn btn-outline-info my-3"
                  >
                    Subscribe <MdSubscriptions className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
