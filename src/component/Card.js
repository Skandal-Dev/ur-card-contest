import React from 'react';

export function Star(){

    return (
        <img className="card-star-on" src="https://s.acdn.ur-img.com/img/v3/card/icon-star-on.png" alt="star"/>
    );
}

export function Stars(lvl){
    console.log(lvl.lvl)
    let arr = [];
    for (let index = 0; index < lvl.lvl; index++) {
        arr.push(<Star></Star>);
    }

    return (
        <div>
            {arr}
        </div>
    );
}

class Card extends React.Component{

    // Receive props

    render(){


        let lvl = this.props.lvl;
        let prism = "";
        if (this.props.prismatic)
            prism = "prismatic";
        else
            prism = "";

        return (
            <div  id="view">

            <div id="card" className={`ur-card card-${this.props.rarity} ${prism}`} ref={this.props.refference}>
                <img draggable="false" className="card-picture" src={this.props.img} style={{width: `${this.props.imageSize}%`, transform: `translate(${this.props.top}px,${this.props.left}px)`}} data-src="" alt="picture"/>

                    <div className={`card-layer layer-${this.props.rarity} ${prism}`}></div>
                    <a className="card-link"></a>
                        <div className={`card-top card-top-${this.props.rarity} ${prism}`}>
                            <a className="card-clan-link">

                                <img className="card-clan img-fluid" src={`https://s.acdn.ur-img.com/urimages/clan/${this.props.clan}_42.png`} alt="All Stars"/>
                            </a>
                        <span className="h6 card-name m-0">{this.props.name_card}</span>
                        </div>
                    <div className="card-bottom">
                        <div className="progress card-progress">
                            <div className="progress-bar" role="progressbar" style={{width: "100%"}}></div>
                        <div className="card-stars">

                                <Stars lvl={this.props.lvl}></Stars>

                            </div>
                            </div>
                            <div className="h5 card-power m-0">{this.props.power}</div>
                            <div className="h5 card-damage m-0">{this.props.damage}</div>
                            <div className="card-ability text-black">
                                {this.props.ability}
                            </div>
                            <div className="card-bonus text-black">{this.props.bonus}</div>

                        </div>



                    </div>

                  {/*  <div className='cards-note'>
                      <Stars lvl={this.props.lvl}></Stars>

                    </div>

                    */}
            </div>


        );
    }
}

export default Card;
