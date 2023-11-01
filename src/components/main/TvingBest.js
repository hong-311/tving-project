import React, { useState } from 'react';
import styled from 'styled-components';
import { CiExport } from "react-icons/ci";
import { PiHeartStraightLight, PiHeartStraightFill } from "react-icons/pi";
const TvingBestBlock = styled.div`
    width: 100%; height: 700px; margin-bottom: 50px;
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: no-repeat; 
    position: relative;
    .contentsBg{
        width: 100%; height: 100%;
        object-fit: cover; object-position: center top;
        filter: blur(200px) brightness(60%);
    }
    .contents_wrap{
        position: absolute; left: 0; top: 0;
        width: calc(100% - 120px); height: 100%;
        padding-top: 120px; margin: 0 60px; border-bottom: 1px solid rgba(255,255,255,0.2);
        display: flex; justify-content: space-between; align-items: flex-start;
    }
    .contents_left{
        width: 650px; padding: 10px;
        h2{ 
            margin-bottom: 20px;
            img {
                height: 70px;
            }
        }
        .info{
            display: flex;  margin-bottom: 30px;
            li{ 
                padding: 1px 4px 2px; border: 1px solid hsla(0,0%,100%,0.4);
                border-radius: 5px; margin-right: 8px;
                color: hsla(0,0%,100%,0.7); font-size: 15px;
                font-weight: bold;
            }
        }
        .btn{
            display: flex; height: 80px;  margin-bottom: 20px;
            li{ 
                margin-right: 40px; text-align: center;
                &.view_btn{
                    a{
                        display: block; width: 240px; height: 80px; 
                        border-radius: 5px; background-color: #fff;
                        color: #000; line-height: 80px;
                        font-size: 18px; font-weight: bold; 
                    }
                }
                &.bookmark_btn, &.share_btn{
                    a{
                        color: #fff; font-size: 15px;  font-weight: bold;
                        svg{
                            display: block; width: 38px; height: 40px;
                            margin-bottom: 3px;
                        }
                    }
                } 
            }

        }
        .people{
            margin-bottom: 10px;
            li{ 
                width: 100%; height: 30px; line-height: 30px;
                font-size: 15px; color: hsla(0,0%,100%,0.7); 
                overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
                font-weight: bold;

                .title{ 
                    margin-right: 15px; color: hsla(0,0%,100%,0.7);  font-weight: bold; }
            }
        }
        p{ 
            width: 100%; height: 90px; 
            line-height: 30px; text-align: justify;
            font-size: 15px; color: hsla(0,0%,100%,0.7); 
            overflow: hidden; display: -webkit-box;
            -webkit-line-clamp: 3;  -webkit-box-orient: vertical;
            font-weight: bold;
        }
    }
    .poster_wrap{
        width: 270px; margin-right: 40px;
        border-radius: 5px; overflow: hidden;
        img{ display: block; width: 100%; }
    }
`;

//프리젠테이셔널 컴포넌트
function TvingBest({ tvingbest }) {
    const { poster, logo, age, time, type, broadcasting, season, creator, cast, explain } = tvingbest;

    const infoArrays = [age, time, type, broadcasting, season];

    const [like, setLike] = useState(false);

    const onToggle = () => setLike(!like);

    return (
        <TvingBestBlock>
            <img src={poster} className="contentsBg" alt="컨텐츠 포스터" />
            <div className="contents_wrap">
                <div className="contents_left">
                    <h2><img src={logo} alt="컨텐츠 로고" height="100" /></h2>
                    <ul className="info">
                        {
                            infoArrays.map((infoArray, index) => (
                                <li key={index} style={{display: infoArray || "none"}}>{infoArray}</li>
                            ))
                        }
                    </ul>
                    <ul className="btn">
                        <li className="view_btn"><a href="#!">▶ 1화 시청하기</a></li>
                        <li className="bookmark_btn">
                            <a href="#!" onClick={() => onToggle()}>
                              {like ? <PiHeartStraightFill/> : <PiHeartStraightLight /> }  
                                찜
                            </a>
                        </li>
                        <li className="share_btn">
                            <a href="#!">
                                <CiExport />
                                공유
                            </a>
                        </li>
                    </ul>
                    <ul className="people">
                        <li><span className="title">크리에이터</span> { creator }</li>
                        <li><span className="title">출연</span> { cast }</li>
                    </ul>
                    <p>{explain}</p>
                </div>
                <div className="poster_wrap">
                    <img src={poster} alt="컨텐츠 포스터" />
                </div>
            </div>
        </TvingBestBlock>
    );
}

export default TvingBest;