import React, { Component } from 'react'
import WorksCarousel from '../WorksCarousel'
import Reveal from 'react-reveal/Reveal';
import Grid from '@material-ui/core/Grid'
import {Link} from "react-router-dom";

export default class FeaturedText extends Component {
    render() {
        const { textWithList, textWithHeader, textWithCaption, quoteTextRight, textWithMotifRight, textWithMotifLeft, textBigStatement, list, header, caption, text, ctaLabel, textForMemberLeft, textForMemberRight, memberName, memberTitle, textForProjectLeft, textForProjectRight, textForProductImageLeft, textForProductImageRight, projectTitle, projectType, status, linkTo, linkName, className, style, anim, dominantColor, textWithCardRight } = this.props
        return (
            <div className="nomargin-container" style={style}>
                {textWithList && list && text &&
                  <div classname="container">
                    <Grid container className={`featured-text text-with-list text-with-list-desktop ${className}`} justify="center" alignItems="center">
                      <Grid item className="text-body" md={12} xs={12} justify="center" alignItems="center">
                        <Grid container justify="center" alignItems="flex-start">
                          <Grid item className="text-list" md={2} xs={12}>
                            <ul>
                              { list.map((listItem) =>
                                <li>{listItem}</li>
                              )}
                            </ul>
                          </Grid>
                          <Grid item md={2} xs={0}></Grid>
                          <Grid item className="text-statement" md={8} xs={12}>{text}</Grid>
                        </Grid>
                      </Grid>
                      <Grid container className="text-additional" md={8} xs={12} justify="center">
                        <Grid item className="additional-text-1" md={4} xs={12}>{status}</Grid>
                        <Grid item className="additional-text-2" md={8} xs={12}><a className="linkTo" href={`${linkTo}`}>{linkName}</a></Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={`featured-text text-with-list text-with-list-mobile ${className}`} justify="center" alignItems="center">
                      <Grid item className="text-body" md={8} xs={12} justify="center" alignItems="center">
                        <Grid container justify="center" alignItems="flex-start">
                          <Grid item className="text-statement" md={8} xs={12}>{text}</Grid>
                          <Grid item className="text-list" md={2} xs={12}>
                            <ul>
                              { list.map((listItem) =>
                                <li>{listItem}</li>
                              )}
                            </ul>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container className="text-additional" md={8} xs={12} justify="center">
                        <Grid item className="additional-text-1" md={4} xs={12}>{status}</Grid>
                        <Grid item className="additional-text-2" md={8} xs={12}><a className="linkTo" href={`${linkTo}`}>{linkName}</a></Grid>
                      </Grid>
                    </Grid>
                  </div>
                }
                {textWithHeader && header && text &&
                  <div classname="container">
                    <Grid container className={`featured-text text-with-header ${className}`} justify="center" alignItems="center">
                      <Grid item className="text-body" md={8} xs={12} justify="center" alignItems="center">
                        <Grid container justify="center" alignItems="flex-start">
                          <Grid item className="text-header" md={12} xs={12}>
                            {header}
                          </Grid>
                          <Grid item className="text-statement" md={12} xs={12}>{text}</Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                }
                { textWithMotifRight && text && dominantColor && ctaLabel &&
                  <div classname="nomargin-container">
                    <Grid container className={`featured-text color-text ${className} ${dominantColor}`} alignItems="center">
                      <Grid item className="text-body" md={6} justify="center">
                        <Reveal effect="text-body-slide">
                          <Grid item className="text-statement" md={8} xs={12}>{text}</Grid>
                        </Reveal>
                      </Grid>
                      <Grid item md={1} xs={12}/>
                      <Grid item md={5} xs={12} className="works-carousel-container right">
                        <Reveal effect="works-carousel-container-slide">
                          <WorksCarousel className="movements" ctaLabel={ctaLabel}/>
                        </Reveal>
                      </Grid>
                    </Grid>
                  </div>
                }
                { quoteTextRight && text && dominantColor && ctaLabel &&
                  <div classname="nomargin-container">
                    <Grid container className={`featured-text color-text quote-text ${className} ${dominantColor}`} alignItems="center">
                      <Grid item className="text-body" md={6} justify="center">
                        <Reveal effect="text-body-slide">
                          <Grid item className="text-statement" md={8} xs={12}>
                          <p className="quote-header">People talk.</p>
                            "{text}"
                            <p className="quote-author">Jedd Countey <br/>Founder, Strive Digital</p>
                          </Grid>
                        </Reveal>
                      </Grid>
                      <Grid item md={1} xs={12}/>
                      <Grid item md={5} xs={12} className="works-carousel-container right">
                        <Reveal effect="works-carousel-container-slide">
                          <WorksCarousel className="movements" ctaLabel={ctaLabel}/>
                        </Reveal>
                      </Grid>
                    </Grid>
                  </div>
                }
                { textWithMotifLeft && text && dominantColor && ctaLabel &&
                  <div classname="nomargin-container">
                    <Grid container className={`featured-text color-text color-text-right ${className} ${dominantColor}`} alignItems="center">
                      <Grid item md={5} xs={12} className="works-carousel-container left">
                        <Reveal effect="works-carousel-container-slide">
                          <WorksCarousel fromRight className="movements" ctaLabel={ctaLabel}/>
                        </Reveal>
                      </Grid>
                      <Grid item md={1}/>
                      <Grid item className="text-body" md={6} justify="center">
                        <Reveal effect="text-body-slide">
                          <Grid item className="text-statement" md={8} xs={12}>{text}</Grid>
                        </Reveal>
                      </Grid>
                    </Grid>
                  </div>
                }
                { textForMemberLeft && memberTitle && memberName && text && dominantColor &&
                  <div classname="nomargin-container">
                  <Grid container className={`featured-text member-text color-text ${className} ${dominantColor}`} alignItems="center">
                    <Grid item md={1}/>
                    <Grid item className="text-body" md={6} justify="center">
                      <Reveal effect="text-body-slide">
                        <Grid item className="text-statement" md={8} xs={12}>
                          <div className="member-title">{memberTitle}</div>
                          <div className="member-name">{memberName}</div>
                          <div className="member-text">{text}</div>
                        </Grid>
                      </Reveal>
                    </Grid>
                    <Grid item md={5} xs={12} className="member-image-container left">
                      <Reveal effect="member-image-container-slide">
                        <Grid item className="image-wrapper" md={12} alignItems="center">
                          <Grid container justify="center" alignItems="center">
                            <Grid item className="image-background image-background-full" md={12}></Grid>
                          </Grid>
                        </Grid>
                      </Reveal>
                    </Grid>
                  </Grid>
                  </div>
                }
                { textForMemberRight && memberTitle && memberName && text && dominantColor &&
                  <div classname="nomargin-container">
                  <Grid container className={`featured-text member-text color-text ${className} ${dominantColor}`} alignItems="center">
                    <Grid item md={5} xs={12} className="member-image-container right">
                      <Reveal effect="member-image-container-slide">
                        <Grid item className="image-wrapper" md={12} alignItems="center">
                          <Grid container justify="center" alignItems="center">
                            <Grid item className="image-background image-background-full" md={12}></Grid>
                          </Grid>
                        </Grid>
                      </Reveal>
                    </Grid>
                    <Grid item className="text-body" md={6} justify="center">
                      <Reveal effect="text-body-slide">
                        <Grid item className="text-statement" md={8} xs={12}>
                          <div className="member-title">{memberTitle}</div>
                          <div className="member-name">{memberName}</div>
                          <div className="member-text">{text}</div>
                        </Grid>
                      </Reveal>
                    </Grid>
                  </Grid>
                  </div>
                }
                { textForProjectLeft && projectType && projectTitle && text && dominantColor &&
                  <div classname="nomargin-container">
                  <Grid container className={`featured-text project-text member-text color-text ${className} ${dominantColor}`} alignItems="center">
                    <Grid item className="text-body" md={6} xs={12} justify="center">
                      <Reveal effect="text-body-slide">
                        <Grid item className="text-statement" md={8} xs={12}>
                          <div className="member-title">{projectType}</div>
                          <div className="member-name">{projectTitle}</div>
                          <div className="member-text">{text}</div>
                        </Grid>
                      </Reveal>
                    </Grid>
                    <Grid item md={1}/>
                    <Grid item md={5} xs={12} className="works-carousel-container right">
                      <Reveal effect="works-carousel-container-slide">
                        <WorksCarousel className="movements" ctaLabel={ctaLabel}/>
                      </Reveal>
                    </Grid>
                  </Grid>
                  </div>
                }
                { textForProjectRight && projectType && projectTitle && text && dominantColor &&
                  <div classname="nomargin-container">
                  <Grid container className={`featured-text project-text member-text color-text ${className} ${dominantColor}`} alignItems="center">
                    <Grid item md={5} xs={12} className="works-carousel-container left">
                      <Reveal effect="works-carousel-container-slide">
                        <WorksCarousel className="movements" ctaLabel={ctaLabel}/>
                      </Reveal>
                    </Grid>
                    <Grid item md={1}/>
                    <Grid item className="text-body" md={6} xs={12} justify="center">
                      <Reveal effect="text-body-slide">
                        <Grid item className="text-statement" md={8} xs={12}>
                          <div className="member-title">{projectType}</div>
                          <div className="member-name">{projectTitle}</div>
                          <div className="member-text">{text}</div>
                        </Grid>
                      </Reveal>
                    </Grid>
                  </Grid>
                  </div>
                }
                { textWithCardRight && projectType && projectTitle && text && dominantColor && list &&
                  <div classname="nomargin-container">
                  <Grid container className={`featured-text project-text-card member-text color-text ${className} ${dominantColor}`} alignItems="center">
                    <Grid item md={5} xs={6} className="text-card left">
                      <Reveal effect="text-card-slide">
                        <Grid container className="card-inner-wrapper">
                          <Grid item md={12} className="status-items"><p>{status}</p></Grid>
                          <Grid item md={12} className="services-list">
                            <div className="services-list-content">
                              <p>Services</p>
                              <ul>
                                { list.map((listItem) =>
                                  <li>{listItem}</li>
                                )}
                              </ul>
                            </div>
                          </Grid>
                        </Grid>
                      </Reveal>
                    </Grid>
                    <Grid item md={1}/>
                    <Grid item className="text-body" md={6} justify="center">
                      <Reveal effect="text-body-slide">
                        <Grid item className="text-statement" md={8} xs={12}>
                          <div className="member-title">{projectType}</div>
                          <div className="member-name">{projectTitle}</div>
                          <div className="member-text">{text}</div>
                        </Grid>
                      </Reveal>
                    </Grid>
                  </Grid>
                  </div>
                }
                { textForProductImageLeft && header && text && dominantColor &&
                  <div classname="nomargin-container">
                  <Grid container className={`featured-text project-text-image color-text ${className} ${dominantColor}`} alignItems="center">
                    <Grid item className="text-body" md={6} justify="center">
                      <Reveal effect="text-body-slide">
                        <Grid item className="text-statement" md={8} xs={12}>
                          <div className="image-title">{header}</div>
                          <div className="image-text">{text}</div>
                        </Grid>
                      </Reveal>
                    </Grid>
                    <Grid item md={1}/>
                    <Grid item md={5} xs={6} className="product-image-container left">
                      <Reveal effect="product-image-container-slide">
                        <Grid item className="image-wrapper" md={12} alignItems="center">
                          <Grid container justify="center" alignItems="center">
                            <Grid item className="image-background image-background-full" md={12}></Grid>
                          </Grid>
                        </Grid>
                      </Reveal>
                    </Grid>
                  </Grid>
                  </div>
                }
                { textForProductImageRight && header && text && dominantColor &&
                  <div classname="nomargin-container">
                  <Grid container className={`featured-text project-text-image color-text ${className} ${dominantColor}`} alignItems="center">
                    <Grid item md={5} xs={6} className="product-image-container right">
                      <Reveal effect="product-image-container-slide">
                        <Grid item className="image-wrapper" md={12} alignItems="center">
                          <Grid container justify="center" alignItems="center">
                            <Grid item className="image-background image-background-full" md={12}></Grid>
                          </Grid>
                        </Grid>
                      </Reveal>
                    </Grid>
                    <Grid item md={1}/>
                    <Grid item className="text-body" md={6} justify="center">
                      <Reveal effect="text-body-slide">
                        <Grid item className="text-statement" md={8} xs={12}>
                          <div className="image-title">{header}</div>
                          <div className="image-text">{text}</div>
                        </Grid>
                      </Reveal>
                    </Grid>
                  </Grid>
                  </div>
                }
                { textBigStatement && text &&
                  <div classname="nomargin-container">
                    <Grid container className={`featured-text big-statement ${className}`} alignItems="center">
                      <Grid item className="text-body" md={12} justify="center"><p>{text}</p></Grid>
                    </Grid>
                  </div>
                }
            </div>
        )
    }
}
