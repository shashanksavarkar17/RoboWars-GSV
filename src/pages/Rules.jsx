import React from "react";
import "./Rules.css";
import { rulesData } from "../seed";
import AnimatedPage from "../components/AnimatedPage";

import Rulebook from "../assets/ROBOWAR 2026_ OFFICIAL RULEBOOK.pdf";

const Rules = () => {
  return (
    <AnimatedPage>
      <div className="rules-page">
        <div className="rules-header">
          <div className="rules-download">
            <a
              href="../assets/ROBOWAR 2026_ OFFICIAL RULEBOOK.pdf"
              download
              className="download-btn clickable"
            >
              Download Official Rulebook
            </a>
          </div>
          <span className="subtitle">Tournament Protocol</span>
          <h1>
            Official <span>Rules</span> & Regulations
          </h1>
        </div>

        <div className="rules-container">
          {rulesData.map((category, index) => (
            <div
              key={index}
              className="rule-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rule-card-header">
                <div className="rule-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2>{category.title}</h2>
              </div>

              <div className="card-divider"></div>

              <ul className="rule-list">
                {category.rules.map((rule, i) => (
                  <li key={i}>
                    {rule.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx !== rule.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rules-disclaimer">
          <p>
            ⚠️ Failure to comply with these rules will lead to immediate
            disqualification.
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Rules;
