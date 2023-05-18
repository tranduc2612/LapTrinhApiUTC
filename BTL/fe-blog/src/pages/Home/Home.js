import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../../services/blogsServices";

function Home() {
	const blogs = useSelector(({ blogs }) => {
		return blogs.blogs;
	});

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBlogs());
	}, []);

	return (
		<div>
			<div className="mainheading">
				<h1 className="sitetitle">Mediumish</h1>
				<p className="lead">
					Bootstrap theme, medium style, simply perfect for bloggers
				</p>
			</div>

			<section className="recent-posts">
				<div className="section-title">
					<h2>
						<span>All Blogs</span>
					</h2>
				</div>
				<div className="card-columns listrecent">
					{blogs.map((e) => {
						return (
							<div className="card" key={e.id}>
								<Link to="/detail-post">
									<img className="img-fluid" src={e.image} alt="" />
								</Link>
								<div className="card-block">
									<h2 className="card-title">
										<Link to="/detail-post">{e.title}</Link>
									</h2>
									<div className="metafooter">
										<div className="wrapfooter">
											<span className="meta-footer-thumb">
												<a href="author.html">
													<img
														className="author-thumb"
														src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
														alt="Sal"
													/>
												</a>
											</span>
											<span className="author-meta">
												<span className="post-name">
													<a href="author.html">{e.user.username}</a>
												</span>
												<br />
												<span className="post-date">{e.createTime}</span>
											</span>
											<span className="post-read-more">
												<Link to="/detail-post" title="Read Story">
													<svg
														className="svgIcon-use"
														width="25"
														height="25"
														viewBox="0 0 25 25"
													>
														<path
															d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
															fillRule="evenodd"
														></path>
													</svg>
												</Link>
											</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<div className="footer">
				<p className="pull-left">Copyright &copy; 2017 Your Website Name</p>
				<p className="pull-right">
					Mediumish Theme by{" "}
					<a target="_blank" href="https://www.wowthemes.net">
						WowThemes.net
					</a>
				</p>
				<div className="clearfix"></div>
			</div>
		</div>
	);
}

export default Home;
