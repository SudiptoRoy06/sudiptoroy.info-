import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import vueIcon from "@iconify/icons-logos/vue";
import { Document, Page, pdfjs } from "react-pdf";
import reactIcon from "@iconify/icons-logos/react";
import angularIcon from "@iconify/icons-logos/angular-icon";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const pdfUrl = "resource/CV-Sudipto-Roy.pdf";

const About = ({ sharedBasicInfo, resumeBasicInfo }) => {

  const [ hello, setHello ] = useState();
  const [ about, setAbout ] = useState("");
  const [ aboutF, setAboutF ] = useState("");
  const [ aboutT, setAboutT ] = useState("");
  const [ aboutTh, setAboutTh ] = useState("");
  const [ sectionName, setSectionName ] = useState("");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-Sudipto-Roy.pdf";
    link.click();
  };

  useEffect(() => {
    if (resumeBasicInfo && sharedBasicInfo) {
      const secName = resumeBasicInfo.section_name.about;
  
      setAbout(resumeBasicInfo.description.first);
      setAboutT(resumeBasicInfo.description.second);
      setAboutTh(resumeBasicInfo.description.third);
      setAboutF(resumeBasicInfo.description.forth);
      setSectionName(secName);
      setHello(resumeBasicInfo.description_header);
    }
  },[resumeBasicInfo, sharedBasicInfo]);

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <Document file={pdfUrl}>
                  <Page
                    pageNumber={1}
                    width={300}
                    renderMode="canvas"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
                <button className="btn btn-primary" onClick={handleDownload}>Download CV</button>
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                  <br />
                  <br />
                  {aboutT}
                  <br />
                  <br />
                  {aboutTh}
                  <br />
                  <br />
                  {aboutF}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default About;
