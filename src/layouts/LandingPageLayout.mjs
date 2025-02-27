// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mdx from "../common/Mdx.mjs";
import * as Icon from "../components/Icon.mjs";
import * as Meta from "../components/Meta.mjs";
import * as Next from "../bindings/Next.mjs";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Button from "../components/Button.mjs";
import * as Markdown from "../components/Markdown.mjs";
import * as OurUsers from "../common/OurUsers.mjs";
import * as LzString from "lz-string";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Navigation from "../components/Navigation.mjs";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as HighlightJs from "../common/HighlightJs.mjs";
import * as ImageGallery from "../components/ImageGallery.mjs";

function LandingPageLayout$Intro(Props) {
  return React.createElement("section", {
              className: "flex justify-center"
            }, React.createElement("div", {
                  className: "max-w-1060 flex flex-col items-center px-5 sm:px-8 lg:box-content"
                }, React.createElement("h1", {
                      className: "hl-title text-center max-w-[53rem]"
                    }, "来自未来的快速、简单且完全类型化的JavaScript"), React.createElement("h2", {
                      className: "body-lg text-center text-gray-60 my-4 max-w-[40rem]"
                    }, "ReScript是一门健壮的类型化语言，可以编译成高效且可读的JavaScript。\n          它有一个闪电般速度的编译工具链，可以扩展到任意大小的代码库。"), React.createElement("div", {
                      className: "mt-4 mb-2"
                    }, React.createElement(Next.Link.make, {
                          href: "/docs-cn/manual/latest/installation",
                          passHref: true,
                          children: React.createElement(Button.make, {
                                children: "快速开始"
                              })
                        }))));
}

var examples = [{
    res: "module Button = {\n  @react.component\n  let make = (~count: int) => {\n    let times = switch count {\n    | 1 => \"once\"\n    | 2 => \"twice\"\n    | n => Belt.Int.toString(n) ++ \" times\"\n    }\n    let msg = \"Click me \" ++ times\n\n    <button> {msg->React.string} </button>\n  }\n}",
    js: "var React = require(\"react\");\n\nfunction Playground$Button(Props) {\n  var count = Props.count;\n  var times = count !== 1 ? (\n      count !== 2 ? String(count) + \" times\" : \"twice\"\n    ) : \"once\";\n  var msg = \"Click me \" + times;\n  return React.createElement(\"button\", undefined, msg);\n}\n\nvar Button = {\n  make: Playground$Button\n};\n\nexports.Button = Button;"
  }];

function LandingPageLayout$PlaygroundHero(Props) {
  var match = React.useState(function () {
        return examples[0];
      });
  var example = match[0];
  return React.createElement("section", {
              className: "relative mt-20 bg-gray-10"
            }, React.createElement("div", {
                  className: "relative flex justify-center w-full"
                }, React.createElement("div", {
                      className: "relative w-full pt-6 pb-8 sm:px-8 md:px-16 max-w-[1400px]"
                    }, React.createElement("div", {
                          className: "relative z-2 flex flex-col md:flex-row bg-gray-90 mx-auto sm:rounded-lg max-w-[1280px]"
                        }, React.createElement("div", {
                              className: "md:w-1/2"
                            }, React.createElement("div", {
                                  className: "body-sm text-gray-40 text-center py-3 sm:rounded-t-lg md:rounded-tl-lg bg-gray-100"
                                }, "写下 ReScript 程序"), React.createElement("pre", {
                                  className: "text-14 px-8 pt-6 pb-12 whitespace-pre-wrap"
                                }, HighlightJs.renderHLJS(undefined, true, example.res, "res", undefined))), React.createElement("div", {
                              className: "md:w-1/2 "
                            }, React.createElement("div", {
                                  className: "body-sm text-gray-40 py-3 text-center md:border-l border-gray-80 bg-gray-100 sm:rounded-tr-lg"
                                }, "编译到 JavaScript"), React.createElement("pre", {
                                  className: "text-14 px-8 pt-6 pb-14 md:border-l border-gray-80 whitespace-pre-wrap"
                                }, HighlightJs.renderHLJS(undefined, true, example.js, "js", undefined)))), React.createElement("div", undefined, React.createElement(Next.Link.make, {
                              href: "/try?code=" + LzString.compressToEncodedURIComponent(example.res) + "}",
                              children: React.createElement("a", {
                                    className: "captions md:px-0 border-b border-gray-40 hover:border-gray-60 text-gray-60"
                                  }, "在工作台编辑该代码")
                            })), React.createElement("div", {
                          className: "hidden md:block"
                        }, React.createElement("img", {
                              className: "absolute z-0 left-0 top-0 -ml-10 -mt-6",
                              style: {
                                height: "24rem",
                                width: "24rem"
                              },
                              src: "/static/lp/grid.svg"
                            }), React.createElement("img", {
                              className: "absolute z-0 left-0 top-0 -ml-10 mt-10",
                              src: "/static/lp/illu_left.png"
                            })), React.createElement("div", {
                          className: "hidden md:block"
                        }, React.createElement("img", {
                              className: "absolute z-0 right-0 bottom-0 -mb-10 mt-24 -mr-10",
                              style: {
                                height: "24rem",
                                width: "24rem"
                              },
                              src: "/static/lp/grid.svg"
                            }), React.createElement("img", {
                              className: "absolute z-3 right-0 bottom-0 -mr-2 mb-10",
                              src: "/static/lp/illu_right.png"
                            })))));
}

var copyToClipboard = (function(str) {
    try {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
        }
        return true;
      } catch(e) {
        return false;
      }
    });

function LandingPageLayout$QuickInstall$CopyButton(Props) {
  var code = Props.code;
  var match = React.useState(function () {
        return /* Init */0;
      });
  var setState = match[1];
  var state = match[0];
  var buttonRef = React.useRef(null);
  var onClick = function (evt) {
    evt.preventDefault();
    if (copyToClipboard(code)) {
      return Curry._1(setState, (function (param) {
                    return /* Copied */1;
                  }));
    } else {
      return Curry._1(setState, (function (param) {
                    return /* Failed */2;
                  }));
    }
  };
  React.useEffect((function () {
          if (state !== 1) {
            return ;
          }
          var buttonEl = Belt_Option.getExn(Caml_option.nullable_to_opt(buttonRef.current));
          var bannerEl = document.createElement("div");
          bannerEl.className = "foobar opacity-0 absolute top-0 mt-4 -mr-1 px-2 rounded right-0 \n            bg-turtle text-gray-80-tr body-sm\n            transition-all duration-500 ease-in-out ";
          var textNode = document.createTextNode("Copied!");
          bannerEl.appendChild(textNode);
          buttonEl.appendChild(bannerEl);
          var nextFrameId = window.requestAnimationFrame(function (param) {
                bannerEl.classList.toggle("opacity-0");
                bannerEl.classList.toggle("opacity-100");
              });
          var timeoutId = setTimeout((function (param) {
                  buttonEl.removeChild(bannerEl);
                  Curry._1(setState, (function (param) {
                          return /* Init */0;
                        }));
                }), 2000);
          return (function (param) {
                    window.cancelAnimationFrame(nextFrameId);
                    clearTimeout(timeoutId);
                  });
        }), [state]);
  return React.createElement("button", {
              ref: buttonRef,
              className: "relative h-10 w-10 flex justify-center items-center ",
              disabled: state === /* Copied */1,
              onClick: onClick
            }, React.createElement(Icon.Copy.make, {
                  className: "w-6 h-6 mt-px text-gray-40 hover:cursor-pointer hover:text-gray-80"
                }));
}

function copyBox(text) {
  return React.createElement("div", {
              className: "flex justify-between items-center pl-6 pr-3 py-3 w-full bg-gray-10 border border-gray-20 rounded max-w-[25rem]"
            }, React.createElement("span", {
                  className: "font-mono text-14  text-gray-70"
                }, text), React.createElement(LandingPageLayout$QuickInstall$CopyButton, {
                  code: text
                }));
}

function LandingPageLayout$QuickInstall$Instructions(Props) {
  return React.createElement("div", {
              className: "w-full max-w-[400px]"
            }, React.createElement("h2", {
                  className: "hl-3 lg:mt-12"
                }, "快速安装"), React.createElement("div", {
                  className: "captions x text-gray-40 mb-2 mt-1"
                }, "你可以通过npm / yarn将ReScript快速添加到你现有的JavaScript代码库中："), React.createElement("div", {
                  className: "w-full space-y-2"
                }, copyBox("npm install rescript"), copyBox("npx rescript init .")));
}

function LandingPageLayout$QuickInstall(Props) {
  return React.createElement("section", {
              className: "my-32 sm:px-4 sm:flex sm:justify-center"
            }, React.createElement("div", {
                  className: "max-w-1060 flex flex-col w-full px-5 md:px-8 lg:px-8 lg:box-content "
                }, React.createElement("div", {
                      className: "relative max-w-[28rem]"
                    }, React.createElement("p", {
                          className: "relative z-1 space-y-12 text-gray-80 font-semibold text-24 md:text-32 leading-2"
                        }, "在一个强大的类型化语言中", React.createElement("span", {
                              className: "bg-fire-5 rounded-lg border border-fire-10 p-1 "
                            }, "充分利用 JavaScript 的力量"), "而不用担心 \`any\` 类型。")), React.createElement("div", {
                      className: "w-full mt-12 md:flex flex-col lg:flex-row md:justify-between "
                    }, React.createElement("p", {
                          className: "relative z-1 text-gray-80 font-semibold text-24 md:text-32 leading-2 max-w-[32rem]"
                        }, "ReScript 是被用来交付和维护具有良好 UI 和 UX 的关键产品的。"), React.createElement("div", {
                          className: "mt-16 lg:mt-0 self-end",
                          style: {
                            maxWidth: "25rem"
                          }
                        }, React.createElement(LandingPageLayout$QuickInstall$Instructions, {})))));
}

function LandingPageLayout$MainUSP$Item(Props) {
  var caption = Props.caption;
  var title = Props.title;
  var mediaOpt = Props.media;
  var polygonDirectionOpt = Props.polygonDirection;
  var paragraph = Props.paragraph;
  var media = mediaOpt !== undefined ? Caml_option.valFromOption(mediaOpt) : "Placeholder";
  var polygonDirection = polygonDirectionOpt !== undefined ? polygonDirectionOpt : /* Down */1;
  var polyPointsLg = polygonDirection ? "80,0 85,100 100,100 100,0" : "85,0 80,100 100,100 100,0";
  var polyPointsMobile = polygonDirection ? "0,100 100,100 100,70 0,80" : "0,100 100,100 100,78 0,72";
  var polyColor = polygonDirection ? "text-fire-30" : "text-fire";
  return React.createElement("div", {
              className: "relative flex justify-center w-full bg-gray-90 px-5 sm:px-8 lg:px-14 overflow-hidden"
            }, React.createElement("div", {
                  className: "relative max-w-1060 z-3 flex flex-wrap justify-center lg:justify-between pb-16 pt-20 md:pb-20 md:pt-32 lg:pb-40 md:space-x-4 w-full"
                }, React.createElement("div", {
                      className: "max-w-[24rem] flex flex-col justify-center mb-6 lg:mb-2"
                    }, React.createElement("div", {
                          className: "hl-overline text-gray-20 mb-4"
                        }, caption), React.createElement("h3", {
                          className: "text-gray-10 mb-4 hl-2 font-semibold"
                        }, title), React.createElement("div", {
                          className: "flex"
                        }, React.createElement("div", {
                              className: "text-gray-30 body-md pr-8"
                            }, paragraph))), React.createElement("div", {
                      className: "relative mt-10 lg:mt-0"
                    }, React.createElement("div", {
                          className: "relative w-full z-2 bg-gray-90 rounded-lg flex md:mt-0 items-center justify-center rounded-lg",
                          style: {
                            maxWidth: "35rem",
                            boxShadow: "0px 4px 55px 0px rgba(230,72,79,0.10)"
                          }
                        }, media), React.createElement("img", {
                          className: "absolute z-1 bottom-0 right-0 -mb-12 -mr-12",
                          style: {
                            maxWidth: "20rem"
                          },
                          src: "/static/lp/grid2.svg"
                        }))), React.createElement("svg", {
                  className: "md:hidden absolute z-1 w-full h-full bottom-0 left-0 " + polyColor + "",
                  preserveAspectRatio: "none",
                  viewBox: "0 0 100 100"
                }, React.createElement("polygon", {
                      className: "fill-current",
                      points: polyPointsMobile
                    })), React.createElement("svg", {
                  className: "hidden md:block absolute z-1 w-full h-full right-0 top-0 " + polyColor + "",
                  preserveAspectRatio: "none",
                  viewBox: "0 0 100 100"
                }, React.createElement("polygon", {
                      className: "fill-current",
                      points: polyPointsLg
                    })));
}

var item1 = React.createElement(LandingPageLayout$MainUSP$Item, {
      caption: "快速且简洁",
      title: "Web 领域最快的构建系统",
      media: React.createElement("video", {
            className: "rounded-lg",
            controls: true,
            poster: "/static/lp/fast-build-preview.jpg"
          }, React.createElement("source", {
                src: "https://assets-17077.kxcdn.com/videos/fast-build-3.mp4",
                type: "video/mp4"
              })),
      paragraph: React.createElement(React.Fragment, undefined, React.createElement("p", undefined, "ReScript 在意任意规模代码库的一致且快速的反馈迭代。\n          你可以重构代码、拉取复杂的变化，或者随心所欲地切换到特性分支。\n          在这里没有迟缓的 CI 构建、无效的缓存、错误的类型提示或语言服务器内存不足来拖累你。"), React.createElement("p", {
                className: "mt-6"
              }, React.createElement(Next.Link.make, {
                    href: "/docs-cn/manual/latest/build-performance",
                    passHref: true,
                    children: React.createElement(Button.make, {
                          kind: /* PrimaryBlue */1,
                          size: /* Small */0,
                          children: "了解更多"
                        })
                  })))
    });

var item2 = React.createElement(LandingPageLayout$MainUSP$Item, {
      caption: "一个健壮的类型系统",
      title: React.createElement("span", {
            className: "text-transparent bg-clip-text bg-gradient-to-r from-berry-dark-50 to-fire-50"
          }, "更好的类型"),
      media: React.createElement("video", {
            className: "rounded-lg",
            controls: true,
            poster: "/static/lp/type-better-preview.jpg"
          }, React.createElement("source", {
                src: "https://assets-17077.kxcdn.com/videos/type-better-3.mp4",
                type: "video/mp4"
              })),
      polygonDirection: /* Up */0,
      paragraph: "每个 ReScript 应用程序都是完全类型化的，并为您程序中的任何值提供可靠的类型信息。为了清晰和方便调试，我们优先考虑简单类型而不是复杂类型。\n      ReScript中没有 \`any\`，没有magic type，更没有吓你一跳 “undefined”。\n      "
    });

var item3 = React.createElement(LandingPageLayout$MainUSP$Item, {
      caption: "无缝集成",
      title: React.createElement(React.Fragment, undefined, React.createElement("span", {
                className: "text-orange-dark"
              }, "你所熟悉的 JS 生态"), "\n就在你的指尖"),
      media: React.createElement("video", {
            className: "rounded-lg",
            controls: true,
            poster: "/static/lp/interop-example-preview.jpg"
          }, React.createElement("source", {
                src: "https://assets-17077.kxcdn.com/videos/interop-example-2.mp4",
                type: "video/mp4"
              })),
      paragraph: "你可以从 JavaScript 使用任何 ReScript 库，\n      将 ReScript 库导出到JavaScript，并自动生成 TypeScript 类型。\n      就像你从没有离开过 JavaScript 最好的那一部分。"
    });

function LandingPageLayout$MainUSP(Props) {
  return React.createElement("section", {
              className: "w-full bg-gray-90 overflow-hidden",
              style: {
                minHeight: "37rem"
              }
            }, item1, item2, item3);
}

function LandingPageLayout$OtherSellingPoints(Props) {
  return React.createElement("section", {
              className: "flex justify-center w-full bg-gray-90 border-t border-gray-80\n            px-4 sm:px-8 lg:px-16 pt-24 pb-20 "
            }, React.createElement("div", {
                  className: "max-w-1060 grid grid-cols-4 md:grid-cols-10 grid-rows-2 gap-8"
                }, React.createElement("div", {
                      className: "pb-24 md:pb-32 row-span-2 row-start-1 col-start-1 col-span-4 md:col-span-6"
                    }, React.createElement(ImageGallery.make, {
                          className: "w-full ",
                          imgClassName: "w-full h-[25.9rem] object-cover rounded-lg",
                          imgSrcs: [
                            "/static/lp/community-3.jpg",
                            "/static/lp/community-2.jpg",
                            "/static/lp/community-1.jpg"
                          ]
                        }), React.createElement("h3", {
                          className: "hl-3 text-gray-20 mt-4 mb-2"
                        }, "一个总是能帮你把事情搞定的程序员社区"), React.createElement("p", {
                          className: "body-md text-gray-40"
                        }, "没有坚实的社区，任何语言都不可能流行。\n            如果库作者滥用它，那么一个强大的类型系统也没有用。\n            如果所有的库都很慢，那么性能优势就无法体现。\n            加入 ReScript 社区 —— 一群深切关注简单性、速度和实用性的公司和个人在这里等你。"), React.createElement("div", {
                          className: "mt-6"
                        }, React.createElement(Button.make, {
                              href: "https://forum.rescript-lang.org",
                              kind: /* PrimaryBlue */1,
                              size: /* Small */0,
                              children: "加入我们的论坛"
                            }))), React.createElement("div", {
                      className: "col-span-4 lg:row-start-1"
                    }, React.createElement("img", {
                          className: "w-full rounded-lg border-2 border-turtle-dark",
                          src: "/static/lp/editor-tooling-1.jpg"
                        }), React.createElement("h3", {
                          className: "hl-3 text-gray-20 mt-6 mb-2"
                        }, "所有工具开箱即用"), React.createElement("p", {
                          className: "body-md text-gray-40"
                        }, "一个内置的格式化工具，内存友好的 VSCode 和 Vim 插件\n            和一个稳定且不需要太多额外的配置的类型系统和编译器。\n            ReScript 为你带来了构建可靠的 JavaScript、Node 和 ReactJS 应用所需的所有工具")), React.createElement("div", {
                      className: "col-span-4 lg:row-start-2"
                    }, React.createElement("img", {
                          className: "w-full rounded-lg border-2 border-fire-30",
                          src: "/static/lp/easy-to-unadopt.jpg"
                        }), React.createElement("h3", {
                          className: "hl-3 text-gray-20 mt-6 mb-2"
                        }, "很容易适配 —— 没有任何限制"), React.createElement("p", {
                          className: "body-md text-gray-40"
                        }, "ReScript 在实现的时候就考虑了渐进式适配。\n            如果你想回到普通的 JavaScript，只需删除所有源文件并保留其干净的 JavaScript 编译结果。\n            你可以告诉您的同事，无论是否使用 ReScript，您的项目都将继续运作"))));
}

function LandingPageLayout$TrustedBy(Props) {
  return React.createElement("section", {
              className: "mt-20"
            }, React.createElement("h3", {
                  className: "hl-1 text-gray-80 text-center max-w-576 mx-auto"
                }, "被我们的用户所信任"), React.createElement("div", {
                  className: "flex flex-wrap mx-4 gap-8 justify-center items-center max-w-xl lg:mx-auto mt-16 "
                }, OurUsers.companies.map(function (company) {
                      var renderedCompany = React.createElement("a", {
                            href: company.url,
                            rel: "noopener noreferrer"
                          }, React.createElement("img", {
                                className: "hover:opacity-75 max-w-sm h-12",
                                src: company.path
                              }));
                      return React.createElement("div", {
                                  key: company.name
                                }, renderedCompany);
                    })), React.createElement("div", {
                  className: "mt-10 max-w-320 overflow-hidden opacity-50",
                  style: {
                    maxHeight: "6rem"
                  }
                }, React.createElement("img", {
                      className: "w-full h-full",
                      src: "/static/lp/grid.svg"
                    })));
}

var cards = [
  {
    imgSrc: "/static/ic_manual@2x.png",
    title: "语言手册",
    descr: "查阅基础知识：所有的语言特性的参考指南",
    href: "/docs-cn/manual/latest/introduction"
  },
  {
    imgSrc: "/static/ic_rescript_react@2x.png",
    title: "ReScript + React",
    descr: "全世界的用户都在使用 ReactJS 的一等公民绑定。",
    href: "/docs/react/latest/introduction"
  },
  {
    imgSrc: "/static/ic_manual@2x.png",
    title: "渐进式适配 ReScript",
    descr: "了解如何在你当前的项目中开始使用 ReScript。买之前先试试！",
    href: "/docs-cn/manual/latest/installation#集成到已有的-js-项目中"
  },
  {
    imgSrc: "/static/ic_gentype@2x.png",
    title: "集成到 TypeScript",
    descr: "了解如何在你现有的 TypeScript 代码库中集成 ReScript。",
    href: "/docs/gentype/latest/introduction"
  }
];

var templates = [{
    imgSrc: "/static/nextjs_starter_logo.svg",
    title: React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "ReScript & "), React.createElement("div", {
              className: "text-gray-40"
            }, "NextJS")),
    descr: "可以从我们的 NextJS 启动模板开始。",
    href: "https://github.com/ryyppy/rescript-nextjs-template"
  }];

function LandingPageLayout$CuratedResources(Props) {
  return React.createElement("section", {
              className: "bg-gray-100 w-full pb-40 pt-20 "
            }, React.createElement("div", {
                  className: "mb-10 max-w-1280 flex flex-col justify-center items-center mx-5 md:mx-8 lg:mx-auto"
                }, React.createElement("div", {
                      className: "body-sm md:body-lg text-gray-40 w-40 mb-4 xs:w-auto text-center"
                    }, "快来尝试一下 ReScript 吧!"), React.createElement("h2", {
                      className: "hl-1 text-gray-20 text-center"
                    }, "精选资源")), React.createElement("div", {
                  className: "px-5 md:px-8 max-w-1280 mx-auto my-20"
                }, React.createElement("div", {
                      className: "body-lg text-center z-2 relative text-gray-40 max-w-[12rem] mx-auto bg-gray-100"
                    }, "指引和文档"), React.createElement("hr", {
                      className: "bg-gray-80 h-px border-0 relative top-[-12px]"
                    })), React.createElement("div", undefined, React.createElement("div", {
                      className: "grid grid-flow-col grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 md:gap-4 lg:gap-8 max-w-1280 px-5 md:px-8 mx-auto"
                    }, Belt_Array.mapWithIndex(cards, (function (i, card) {
                            return React.createElement(Next.Link.make, {
                                        href: card.href,
                                        children: React.createElement("a", {
                                              className: "hover:bg-gray-80 bg-gray-90 px-4 md:px-8 pb-0 md:pb-8 relative rounded-xl md:min-w-[196px]"
                                            }, React.createElement("img", {
                                                  className: "h-[53px] absolute mt-6",
                                                  src: card.imgSrc
                                                }), React.createElement("h5", {
                                                  className: "text-gray-10 hl-4 mt-32 h-12"
                                                }, card.title), React.createElement("div", {
                                                  className: "text-gray-40 mt-2 mb-8 body-sm"
                                                }, card.descr)),
                                        key: String(i)
                                      });
                          }))), React.createElement("div", {
                      className: "px-5 md:px-8 max-w-1280 mx-auto my-20"
                    }, React.createElement("div", {
                          className: "body-lg text-center z-2 relative text-gray-40 w-[8rem] mx-auto bg-gray-100"
                        }, "项目模板"), React.createElement("hr", {
                          className: "bg-gray-80 h-px border-0 relative top-[-12px]"
                        })), React.createElement("div", {
                      className: "grid grid-flow-col grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-2 md:gap-4 lg:gap-8 max-w-1280 px-5 md:px-8 mx-auto"
                    }, Belt_Array.mapWithIndex(templates, (function (i, card) {
                            return React.createElement("a", {
                                        key: String(i),
                                        className: "hover:bg-gray-80 bg-gray-90 px-5 pb-8 relative rounded-xl min-w-[200px]",
                                        href: card.href
                                      }, React.createElement("img", {
                                            className: "h-12 absolute mt-5",
                                            src: card.imgSrc
                                          }), React.createElement("h5", {
                                            className: "text-gray-10 hl-4 mt-32 h-12"
                                          }, card.title), React.createElement("div", {
                                            className: "text-gray-40 mt-4 body-sm"
                                          }, card.descr));
                          })))));
}

function LandingPageLayout(Props) {
  var componentsOpt = Props.components;
  var children = Props.children;
  var components = componentsOpt !== undefined ? Caml_option.valFromOption(componentsOpt) : Markdown.$$default;
  var overlayState = React.useState(function () {
        return false;
      });
  return React.createElement(React.Fragment, undefined, React.createElement(Meta.make, {
                  keywords: [
                    "ReScript",
                    "rescriptlang",
                    "JavaScript",
                    "JS",
                    "TypeScript"
                  ],
                  description: "Fast, Simple, Fully Typed JavaScript from the Future",
                  title: "ReScript 编程语言",
                  ogImage: "/static/Art-3-rescript-launch.jpg"
                }), React.createElement("div", {
                  className: "mt-4 xs:mt-16"
                }, React.createElement("div", {
                      className: "text-gray-80 text-18"
                    }, React.createElement(Navigation.make, {
                          overlayState: overlayState
                        }), React.createElement("div", {
                          className: "absolute top-16 w-full"
                        }, React.createElement("div", {
                              className: "relative overflow-hidden pb-32"
                            }, React.createElement("main", {
                                  className: "mt-10 min-w-320 lg:align-center w-full"
                                }, React.createElement(Mdx.Provider.make, {
                                      components: components,
                                      children: React.createElement("div", {
                                            className: ""
                                          }, React.createElement("div", {
                                                className: "w-full"
                                              }, React.createElement("div", {
                                                    className: "mt-16 md:mt-32 lg:mt-40 mb-12"
                                                  }, React.createElement(LandingPageLayout$Intro, {})), React.createElement(LandingPageLayout$PlaygroundHero, {}), React.createElement(LandingPageLayout$QuickInstall, {}), React.createElement(LandingPageLayout$MainUSP, {}), React.createElement(LandingPageLayout$OtherSellingPoints, {}), React.createElement(LandingPageLayout$TrustedBy, {}), React.createElement(LandingPageLayout$CuratedResources, {}), children))
                                    })))))));
}

var make = LandingPageLayout;

export {
  make ,
}
/* item1 Not a pure module */
