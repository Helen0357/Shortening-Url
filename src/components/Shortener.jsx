import { useEffect, useState } from "react"
import bgMobile from "/images/bg-shorten-mobile.svg"
import bgDesktop from "/images/bg-shorten-desktop.svg"
import async from "hbs/lib/async"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const getLocalStorage = () => {
  let linksLocal = localStorage.getItem("links")

  if (linksLocal) {
    console.log('from dunc' ,linksLocal);
    return linksLocal;
    
  } else {
    return null
  }
}

export default function Shortener() {
  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLocalStorage())
  const [buttonText, setButtonText] = useState("Copy")
console.log(getLocalStorage() , links);
  const  shortURL = async(e) => {
    e.preventDefault();
    let Url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
    if (response.ok) {
        const data = await response.text();
        setLinks(data);
        document.getElementById('results').innerHTML = `
        shortend URL : <a href="${data }" target="_blank">${data}</a>`;
       
    }
    else{
        document.getElementById('results').innerHTML = "Error shortening"
    }
  
}

  const handleCopy = () => {
    navigator.clipboard.writeText(links)
    setButtonText("Copied!")
  }

  useEffect(() => {
    localStorage.setItem("links",links);
    setButtonText("Copy");
    document.getElementById("url").value = " ";
  }, [links])

  return (
    <>
      <section className="max-width shortener relative mb-20">
        {/* <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture> */}

        <form className="form" onSubmit={shortURL}>
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              id="url"
              placeholder="Shorten a link here"
              className="w-full py-3 px-5  mb-2 md:mb-0 "
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="btn-cta py-3  w-full md:w-40 "
              onClick={shortURL}
            >
              Shorten It!
            </button>
          </div>
        </form>
<div className="result flex items-center justify-between mt-8">
<div id="results">
shortend URL : <a href={links} target="_blank">{links}</a>
</div>
{links && <button onClick={handleCopy} className="btn-cta2 p-3">{buttonText}</button>
}
</div>
        {/* <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
          <article>
            <h6 className="mb-3 md:mb-0">{links.original_link}</h6>
          </article>

          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-cyan-500">
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button
                  onClick={handleCopy}
                  className="btn-cta rounded-lg text-sm focus:bg-slate-800"
                >
                  {buttonText}
                </button>
              </li>
            </ul>
          </article>
        </div> */}
      </section>
    </>
  )
}
