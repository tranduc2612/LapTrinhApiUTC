import React from "react";

function DetailPost(props) {
	return (
		<div className="detail-post col-md-8 col-md-offset-2 col-xs-12">
			<div className="mainheading">
				<div className="row post-top-meta">
					<div className="col-md-2">
						<a href="author.html">
							<img
								className="author-thumb"
								src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
								alt="Sal"
							/>
						</a>
					</div>
					<div className="col-md-10">
						<a className="link-dark" href="author.html">
							Sal
						</a>
						<a href="#" className="btn follow">
							Follow
						</a>
						<span className="author-description">
							Founder of WowThemes.net and creator of
							<b>"Mediumish"</b> theme that you're currently previewing.
							Developing professional premium themes, templates, plugins,
							scripts since 2012.
						</span>
						<span className="post-date">22 July 2017</span>
						<span className="dot"></span>
						<span className="post-read">6 min read</span>
					</div>
				</div>

				<h1 className="posttitle">
					18 Things You Should Learn Before Moving Into a New Home
				</h1>
			</div>
			<img
				className="featured-image img-fluid"
				src="assets/img/demopic/10.jpg"
				alt=""
			/>

			<div className="article-post">
				<p>
					Holy grail funding non-disclosure agreement advisor ramen
					bootstrapping ecosystem. Beta crowdfunding iteration assets business
					plan paradigm shift stealth mass market seed money rockstar niche
					market marketing buzz market.
				</p>
				<p>
					Burn rate release facebook termsheet equity technology. Interaction
					design rockstar network effects handshake creative startup direct
					mailing. Technology influencer direct mailing deployment return on
					investment seed round.
				</p>
				<p>
					Termsheet business model canvas user experience churn rate low hanging
					fruit backing iteration buyer seed money. Virality release launch
					party channels validation learning curve paradigm shift hypotheses
					conversion. Stealth leverage freemium venture startup
					business-to-business accelerator market.
				</p>
				<blockquote>
					Gen-z strategy long tail churn rate seed money channels user
					experience incubator startup partner network low hanging fruit direct
					mailing. Client backing success startup assets responsive web design
					burn rate A/B testing metrics first mover advantage conversion.
				</blockquote>
				<p>
					Freemium non-disclosure agreement lean startup bootstrapping holy
					grail ramen MVP iteration accelerator. Strategy market ramen leverage
					paradigm shift seed round entrepreneur crowdfunding social proof angel
					investor partner network virality.
				</p>
			</div>
			<div className="after-post-tags">
				<ul className="tags">
					<li>
						<a href="#">Design</a>
					</li>
					<li>
						<a href="#">Growth Mindset</a>
					</li>
					<li>
						<a href="#">Productivity</a>
					</li>
					<li>
						<a href="#">Personal Growth</a>
					</li>
				</ul>
			</div>
			<div className="comment">
				<ul className="list-comment">
					<li className="comment-content">
						<img src="" alt="" />
						<span className="comment-text">Bài viết này hay quá</span>
						<p className="comment-time">1/1/2023</p>
					</li>
					<li className="comment-content">
						<img src="" alt="" />
						<span className="comment-text">Bài viết này hay quá</span>
						<p className="comment-time">1/1/2023</p>
					</li>
					<li className="comment-content">
						<img src="" alt="" />
						<span className="comment-text">Bài viết này hay quá</span>
						<p className="comment-time">1/1/2023</p>
					</li>
					<li className="comment-content">
						<img src="" alt="" />
						<span className="comment-text">Bài viết này hay quá</span>
						<p className="comment-time">1/1/2023</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default DetailPost;
