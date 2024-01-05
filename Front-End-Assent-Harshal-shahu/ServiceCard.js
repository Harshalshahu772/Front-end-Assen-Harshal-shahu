  // Define the data array
  const data = [
    {
      imgSrc: "image/imgLogo/Seo.svg",
      heading: "Automotive SEO",
      text: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
    },
    {
      imgSrc: "image/imgLogo/itme2.svg",
      heading: "PPC Precision",
      text: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
    },
    {
      imgSrc: "image/imgLogo/Social.svg",
      heading: "Social Acceleration",
      text: " Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
    },
    {
      imgSrc: "image/imgLogo/content.svg",
      heading: "Content Excellence",
      text: " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
    },
    {
      imgSrc: "image/imgLogo/Web design.svg",
      heading: "Web Design",
      text: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
    },
    {
      imgSrc: "image/imgLogo/Data driven.svg",
      heading: "Data-Driven Insights",
      text: "Leverage data to refine your strategies, making informed decisions that drive revenue growth."
    },
    {
      imgSrc: "image/imgLogo/Solutions.svg",
      heading: "End-to-End Solutions",
      text: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
    },
    {
      imgSrc: "image/imgLogo/Seo.svg",
      heading: "Automotive SEO",
      text: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
    },
    // Add more objects as needed
  ];

  // Loop through the data array and generate HTML for each item
  for (let i = 0; i < data.length; i++) {
    document.write(`
      <div class="card-conatainer">
        <div class="icone-contaienr">
          <img src="${data[i].imgSrc}" alt="Image ${i + 1}" />
          <p class="icone-heading">${data[i].heading}</p>
        </div>
        <p class="icone-text">
          ${data[i].text}
        </p>
      </div>
    `);
  }