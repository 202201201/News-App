// import React, { Component } from 'react'
import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
  

  //   articles = [
  //   {
  //     source: {
  //       id: null,
  //       name: "CNBC",
  //     },
  //     author: "Pia Singh, Lisa Kailai Han",
  //     title:
  //       "Dow drops more than 300 points as hopes dim for more aggressive Fed rate cuts: Live updates - CNBC",
  //     description:
  //       "U.S. stock futures slipped Wednesday as investors digested the August consumer inflation report.",
  //     url: "https://www.cnbc.com/2024/09/10/stock-market-today-live-updates.html",
  //     urlToImage:
  //       "https://image.cnbcfm.com/api/v1/image/108031297-17259085932024-09-09t160252z_1518666203_rc22x9aql4rp_rtrmadp_0_usa-stocks.jpeg?v=1725908767&w=1920&h=1080",
  //     publishedAt: "2024-09-11T16:32:00Z",
  //     content:
  //       "The S&amp;P 500 and Dow Jones Industrial Average dropped on Wednesday as fresh U.S. inflation data dented traders' hopes of a large Federal Reserve rate cut later next week.\r\nThe broad-market index t… [+1548 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NBC 10 Philadelphia",
  //     },
  //     author: "Hayden Mitman",
  //     title:
  //       "Legendary R&B artist, native Philadelphian Frankie Beverly dies at 77 - NBC Philadelphia",
  //     description:
  //       "On Wednesday morning the family of legendary R&B artist Frankie Beverly announced he died at the age of 77.",
  //     url: "https://www.nbcphiladelphia.com/news/local/legendary-rb-artist-native-philadelphian-frankie-beverly-dies/3966294/",
  //     urlToImage:
  //       "https://media.nbcphiladelphia.com/2024/09/AP19126112471896.jpg?quality=85&strip=all&resize=1200%2C675",
  //     publishedAt: "2024-09-11T16:12:48Z",
  //     content:
  //       "Music fans both here in Philadelphia and around the world have reason to mourn on Wednesday as legendary R&amp;B artist, songwriter and producer Frankie Beverly has died. \r\nHe was 77 years old. \r\nOn … [+2856 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Yahoo Sports Fantasy Staff",
  //     title: "Fantasy Football Week 2 Rankings (Full-PPR) - Yahoo Sports",
  //     description:
  //       "The Yahoo Fantasy team reveals their Week 2 PPR rankings for fantasy football.",
  //     url: "https://sports.yahoo.com/fantasy-football-week-2-rankings-full-ppr-185951893.html",
  //     urlToImage:
  //       "https://s.yimg.com/ny/api/res/1.2/z_W3jNvi63.rsgOQ7QM9Bg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/d07927f0-6fa6-11ef-b7fd-a3cb675eebb0",
  //     publishedAt: "2024-09-11T16:11:09Z",
  //     content:
  //       "Well, folks. Week 1 of your fantasy football season is officially a wrap. Hopefully, you enter Week 2 with a stunning 1-0 record and a big smile on your face. If not, have no fear. The analysts of Ya… [+980 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CNBC",
  //     },
  //     author: "Rebecca Picciotto",
  //     title:
  //       "House Speaker Johnson pulls government funding bill after GOP support collapses - CNBC",
  //     description:
  //       "The House bill would fund the government through March and require people to show proof of citizenship to register to vote, a measure backed by Donald Trump.",
  //     url: "https://www.cnbc.com/2024/09/11/house-speaker-johnson-pulls-government-funding-bill-after-gop-support-collapses.html",
  //     urlToImage:
  //       "https://image.cnbcfm.com/api/v1/image/108032638-1726070624963-gettyimages-2170525603-house_gop_014_091024.jpeg?v=1726070678&w=1920&h=1080",
  //     publishedAt: "2024-09-11T16:09:10Z",
  //     content:
  //       "House Speaker Mike Johnson on Wednesday cancelled a planned vote on a stopgap funding bill that could keep the government open for the next six months after more than a dozen of his fellow Republican… [+1178 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "New York Post",
  //     },
  //     author: "Catherine Zini, Ronny Reyes",
  //     title:
  //       "Diddy sued by ex-'Making the Band' member Dawn Richard, who claims he sexually abused her - New York Post ",
  //     description:
  //       "Sean “Diddy” Combs was slapped with yet another lawsuit from a woman who claimed the hip-hop artist and music executive sexually abused her, according to a new report.",
  //     url: "https://nypost.com/2024/09/11/us-news/diddy-sued-by-ex-making-the-band-member-dawn-richard-who-claims-he-sexually-abused-her/",
  //     urlToImage:
  //       "https://nypost.com/wp-content/uploads/sites/2/2024/09/dawn-richard-diddy-abuse-claims-comp-2.jpg?quality=75&strip=all&w=1024",
  //     publishedAt: "2024-09-11T16:07:30Z",
  //     content:
  //       "Sean Diddy Combs was slapped with yet another lawsuit from a woman who claimed the hip-hop artist and music executive sexually abused her and that she witnessed him allegedly beating former girlfrien… [+2774 chars]",
  //   },
  //   {
  //     source: {
  //       id: "associated-press",
  //       name: "Associated Press",
  //     },
  //     author: "MATTHEW LEE, ILLIA NOVIKOV",
  //     title:
  //       "Blinken and Lammy stress their support for Kyiv as Ukraine pleads for permission to strike Russia - The Associated Press",
  //     description:
  //       "U.S. Secretary of State Antony Blinken announced more than $700 million in aid for Ukraine during a visit to Kyiv, aiming to bolster the energy grid that Russia has repeatedly pounded ahead of an expected difficult winter. The announcement happened Wednesday …",
  //     url: "https://apnews.com/article/blinken-lammy-ukraine-russia-missiles-0584fb5f4cf2b89f9b4eea1358700a91",
  //     urlToImage:
  //       "https://dims.apnews.com/dims4/default/42f9559/2147483647/strip/true/crop/4032x2268+0+210/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6b%2F18%2Fad785988c5e20a249b82fb8d0938%2F966235c6b9c74abfb8166eb03c8d173b",
  //     publishedAt: "2024-09-11T15:33:00Z",
  //     content:
  //       "KYIV, Ukraine (AP) U.S. Secretary of State Antony Blinken announced more than $700 million in aid for Ukraine Wednesday during a visit to Kyiv, aiming to bolster the energy grid that Russia has repea… [+5622 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CBS Sports",
  //     },
  //     author: "",
  //     title:
  //       "Dolphins rule out RB Raheem Mostert for Thursday night game vs. Bills; De'Von Achane's status up in the air - CBS Sports",
  //     description:
  //       "Miami could be down a couple of key running backs on a short week",
  //     url: "https://www.cbssports.com/nfl/news/dolphins-raheem-mostert-ruled-out-thursday-vs-bills-devon-achane-up-in-the-air-miamis-options-at-rb/",
  //     urlToImage:
  //       "https://sportshub.cbsistatic.com/i/r/2024/09/11/c2a6706b-50ac-46cc-8ec1-15cc716471eb/thumbnail/1200x675/41f68923528aebb32f374f58ce322d99/mostert-g.jpg",
  //     publishedAt: "2024-09-11T15:28:00Z",
  //     content:
  //       "The Miami Dolphins are on a short week in Week 2, and have to face one of their toughest opponents in the rival Buffalo Bills. The Bills are 11-1 in their last 12 matchups vs. the Dolphins, the most … [+2382 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NPR",
  //     },
  //     author: "",
  //     title:
  //       "Mammograms will better explain what it means to have dense breasts - NPR",
  //     description:
  //       "Nearly half of women over 40 have dense breasts, which raises their risk of breast cancer.  Mammograms should now include an assessment of breast tissue density.",
  //     url: "https://www.npr.org/sections/shots-health-news/2024/09/11/nx-s1-5106379/dense-breasts-mammogram-screening-fda",
  //     urlToImage:
  //       "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/1730x973+0+51/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F69%2Ff6%2Fc6fbe2714c709da765507dc2324d%2Fap24121534996499.jpg",
  //     publishedAt: "2024-09-11T15:20:08Z",
  //     content:
  //       "Nearly half of women over 40 have what doctors consider dense breast tissue, which increases their risk of cancer, yet until now, few are told what their diagnosis might mean, or what they should do.… [+2382 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "The Weather Channel",
  //     },
  //     author: "The Weather Channel",
  //     title:
  //       "Hurricane Francine Bearing Down On Louisiana - The Weather Channel",
  //     description:
  //       "Hurricane Francine's impacts are arriving. Here's the latest and what you need to know.",
  //     url: "https://weather.com/storms/hurricane/news/2024-09-11-hurricane-francine-forecast-landfall-louisiana-gulf-coast-south",
  //     urlToImage: "https://s.w-x.co/francinewed5am.jpg",
  //     publishedAt: "2024-09-11T15:10:00Z",
  //     content:
  //       "At a Glance\r\n<ul><li>Francine is approaching Louisiana as a hurricane in the Gulf of Mexico.</li><li>It will make landfall in Louisiana by evening, but its impacts will affect a larger area.</li><li>… [+6938 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-verge",
  //       name: "The Verge",
  //     },
  //     author: "Tom Warren",
  //     title: "Sony’s PS5 Pro is a pricey test of next-gen consoles - The Verge",
  //     description:
  //       "Sony’s $700 price tag for the PS5 Pro has got everyone talking. The surprise price looks like a test for what’s to come for next-gen consoles.",
  //     url: "https://www.theverge.com/2024/9/11/24241706/sony-ps5-pro-price-next-gen-consoles",
  //     urlToImage:
  //       "https://cdn.vox-cdn.com/thumbor/drPwFG7LD2JabQ8CFX098SbnCBs=/0x0:2506x1392/1200x628/filters:focal(1253x696:1254x697)/cdn.vox-cdn.com/uploads/chorus_asset/file/25615537/ps5propricing.jpeg",
  //     publishedAt: "2024-09-11T15:07:59Z",
  //     content:
  //       "Sonys PS5 Pro is a pricey test of next-gen consoles\r\nSonys PS5 Pro is a pricey test of next-gen consoles\r\n / The era of Sony and Microsoft subsidizing console hardware looks like its coming to an end… [+6466 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Variety",
  //     },
  //     author: "Michael Schneider",
  //     title:
  //       "Maya Rudolph on Her Mother Era, Reviving Kamala Harris for ‘SNL’ and Why Her ‘Zero-F—s Hormones Have Kicked In’ - Variety",
  //     description:
  //       "Maya Rudolph opens up about her \"Mother\" era, her Emmy nods for 'Loot' and 'Big Mouth' and her plans to bring Kamala Harris back to 'SNL' this fall.",
  //     url: "https://variety.com/2024/tv/awards/maya-rudolph-mother-era-emmys-kamala-harris-snl-1236139076/",
  //     urlToImage:
  //       "https://variety.com/wp-content/uploads/2024/09/Maya-Rudolph-Variety-Cover-Story-3.jpg?crop=218px%2C59px%2C982px%2C551px&resize=1000%2C563",
  //     publishedAt: "2024-09-11T15:00:00Z",
  //     content:
  //       "Like so many of us, Maya Rudolph is having a “Girly Pop Summer.”\r\nThe musically minded “Loot” star, “Saturday Night Live” icon and “Big Mouth” standout says her household has been a Taylor Swift stro… [+17886 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "BBC News",
  //     },
  //     author: null,
  //     title:
  //       "Donald Trump repeats baseless claim about Haitian immigrants eating cats and dogs in Springfield, Ohio - BBC.com",
  //     description:
  //       "Donald Trump claimed immigrants in a small Ohio city were eating pets, but there’s no proof of this.",
  //     url: "https://www.bbc.com/news/articles/c77l28myezko",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/5c3c/live/171a2060-701f-11ef-8f0e-158a0a407ec6.jpg",
  //     publishedAt: "2024-09-11T14:57:42Z",
  //     content:
  //       "A baseless claim that illegal immigrants from Haiti have been eating domestic pets in a small Ohio city has been repeated by Donald Trump. \r\nDuring ABC's presidential debate, Trump said: \"In Springfi… [+4519 chars]",
  //   },
  //   {
  //     source: {
  //       id: "reuters",
  //       name: "Reuters",
  //     },
  //     author: "Saqib Ahmed, Suzanne McGee, Rae Wee",
  //     title:
  //       "Shifting election bets boost solar stocks, weigh on crypto after fiery debate - Reuters",
  //     description:
  //       "Investors scrambled to shift their positioning on Wednesday following a closely-watched debate between Republican Donald Trump and Democratic Vice President Kamala Harris, as betting markets swung in Harris’ favor after the event.",
  //     url: "https://www.reuters.com/markets/us/fiery-debate-gives-wall-street-few-new-details-key-issues-2024-09-11/",
  //     urlToImage:
  //       "https://www.reuters.com/resizer/v2/5UAXAKT7ARCFPFDJQFHDP457VI.JPG?auth=5b84357cc7644dec5d4550c6025b7ec113557b374b3b6b2de6fce9268d4c6599&height=1005&width=1920&quality=80&smart=true",
  //     publishedAt: "2024-09-11T14:12:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Forbes",
  //     },
  //     author: "Conor Murray",
  //     title:
  //       "Elon Musk Says He’ll Give Taylor Swift A Child—Prompting Mockery On Social Media - Forbes",
  //     description:
  //       "Musk’s post could allude to Swift declaring herself a “Childless Cat Lady,” or to false claims parroted by former President Donald Trump that Haitian migrants are eating pet cats—though police in Springfield, Ohio, have denied this.",
  //     url: "https://www.forbes.com/sites/conormurray/2024/09/11/elon-musk-says-hell-give-taylor-swift-a-child-prompting-wild-response-on-social-media/",
  //     urlToImage:
  //       "https://imageio.forbes.com/specials-images/imageserve/66e1a3f0e337246f6555c7fb/0x0.jpg?format=jpg&crop=3000,1687,x0,y53,safe&height=900&width=1600&fit=bounds",
  //     publishedAt: "2024-09-11T14:07:16Z",
  //     content:
  //       "Elon Muskthe billionaire X owner and vocal supporter of former President Donald Trumpmade a bizarre post taking aim at Taylor Swift soon after she made her highly anticipated endorsement for Vice Pre… [+4077 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Alexandra Canal",
  //     title:
  //       "Inflation: Consumer prices rise at slowest pace since early 2021 - Yahoo Finance",
  //     description:
  //       "The Consumer Price Index (CPI) increased 2.5% over the prior year in August, a deceleration from July's 2.9% annual gain in prices.",
  //     url: "https://finance.yahoo.com/news/inflation-consumer-prices-rise-at-slowest-pace-since-early-2021-132305109.html/",
  //     urlToImage:
  //       "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
  //     publishedAt: "2024-09-11T13:23:05Z",
  //     content:
  //       "A closely watched report on US inflation showed consumer prices rose in August at the slowest pace in three years on an annual basis, according to the latest data from the Bureau of Labor Statistics … [+4932 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "New York Post",
  //     },
  //     author: "Erich Richter",
  //     title:
  //       "Dan Le Batard floats theory that Browns leaked new Deshaun Watson sexual assault allegations - New York Post ",
  //     description:
  //       "Dan Le Batard thinks the timing of the latest Deshaun Watson sexual assault lawsuit is a little too convenient for the Browns.",
  //     url: "https://nypost.com/2024/09/11/sports/dan-le-batard-floats-theory-that-browns-leaked-new-deshaun-watson-sexual-assault-allegations/",
  //     urlToImage:
  //       "https://nypost.com/wp-content/uploads/sites/2/2024/09/dan-le-batard-talks-deshaun-watson-conspiracy-theories.jpg?quality=75&strip=all&1726041920&w=1024",
  //     publishedAt: "2024-09-11T13:09:00Z",
  //     content:
  //       "Dan Le Batard thinks the timing of the latest Deshaun Watson sexual assault lawsuit is a little too convenient for the Browns.\r\nDetails of another disturbing lawsuit against the Browns quarterback em… [+3138 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NPR",
  //     },
  //     author: "Brittney Melton",
  //     title:
  //       "Fact-checking the Trump-Harris debate. And, food delivery could help the environment - NPR",
  //     description:
  //       "Vice President Harris and former President Donald Trump faced off last night on several hot topic issues. NPR fact-checked the claims made. And, how food delivery could be environmentally friendly.",
  //     url: "https://www.npr.org/2024/09/11/g-s1-22048/up-first-newsletter-trump-harris-debate-taylor-swift-endorsement-food-delivery-environmentally-friendly",
  //     urlToImage:
  //       "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5400x3038+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F1d%2F8a%2F569ad0e44ee89a76158218b88012%2Fap24255047345434.jpg",
  //     publishedAt: "2024-09-11T11:45:38Z",
  //     content:
  //       "Good morning. You're reading the Up First newsletter. Subscribe here to get it delivered to your inbox, and listen to the Up First podcast for all the news you need to start your day.\r\nToday's top st… [+6214 chars]",
  //   },
  // ];
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const componentDidMount=async()=> {
    // it is run after render
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bdd6cabc405948859ee5b5993d87b7e4&page=1&pageSize=${props.pageSize}`;
    // let data = await fetch( url );
    // let parsedData = await data.json();
    // this.setState( { articles: parsedData.articles ,totalResults:parsedData.totalResults} );
    updateNews();
  }

  const updateNews=async()=> {
    props.setProgress( 10 );
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress( 30 );
    let parsedData = await data.json();
    props.setProgress( 50 );
    setArticles( parsedData.articles );
    settotalResults( parsedData.totalResults );
    props.setProgress(100);
  }
  useEffect( () => {
     document.title = capitalizeFirstLetter(props.category);
    updateNews();
  }, [] );
  const previous = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bdd6cabc405948859ee5b5993d87b7e4&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    // let data = await fetch( url );
    // let parsedData = await data.json();
    // this.setState( {
    //   page: this.state.page -  1,
    //   articles:parsedData.articles
    // })

    // this.setState( { page: this.state.page - 1 } );
    setPage( page - 1 );
    updateNews();
  };

  const next = async () => {
    // if ( ( this.state.page + 1 ) > ( Math.ceil( this.state.totalResults / 20 ) ) ) {
    //   // window.prompt('next page is not available')
    // }
    // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bdd6cabc405948859ee5b5993d87b7e4&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //   let data = await fetch( url );
    //   let parsedData = await data.json();
    //   this.setState( {
    //     page: this.state.page + 1,
    //     articles: parsedData.articles
    //   } )
    // }

    // this.setState({ page: this.state.page + 1 });
    setPage( page + 1 );
    updateNews();
  };

  const fetchMoreData = async () => {
    // this.setState( { page: this.state.page + 1 } );
    setPage( page + 1 );
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles( articles.concat( parsedData.articles ) );
    settotalResults( parsedData.totalResults );
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
  };  

  
    return (
      <>
        <h2 className="text-center" style={{ margin: "40px 0px" }}>
          News - Top Headlines On{" "}
          {capitalizeFirstLetter(props.category)}
        </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            ;
          </div>
            </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <buttond
            disabled={this.state.page <= 1 ? "true" : "false"}
            onClick={this.previous}
            type="button"
            className="btn btn-success"
          >
            &larr; Previous
          </buttond>
          <button
          disabled={
            this.state.page + 1 >
            Math.ceil(this.state.totalResults / props.pageSize)
            }
            onClick={this.next}
            type="button"
            className="btn btn-success mx-5"
            >
            Next &rarr;
            </button>
            </div> */}
            </>
    );
   
}

export default News

News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };