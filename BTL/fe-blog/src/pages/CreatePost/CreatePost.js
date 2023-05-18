import React, { useRef } from "react";
import { Formik, Field, Form } from "formik";
import { Editor } from "@tinymce/tinymce-react";
function CreatePost(props) {
	const editorRef = useRef(null);
	const submitPost = (values) => {
		console.log(values, editorRef.current.getContent());
	};
	const setImageUpload = (imgFile) => {
		console.log(imgFile);
	};
	return (
		<div className="create_post d-flex flex-column">
			<h1>Create Post</h1>
			<Formik initialValues={{}} onSubmit={submitPost}>
				<Form className="d-flex flex-column">
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<Field
							className="form-control"
							id="title"
							name="title"
							placeholder="Your title"
							type="text"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="img">Ảnh bìa</label>
						<input
							type="file"
							className="form-control"
							id="img"
							onChange={(event) => {
								setImageUpload(event.target.files[0]);
							}}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Trạng thái</label>
						<Field
							as={"select"}
							name={"status"}
							className="custom-select form-control"
							id="inputGroupSelect02"
						>
							<option defaultValue>Chọn...</option>
							<option value="0">Chỉ mình tôi</option>
							<option value="1">Tất cả mọi người</option>
							<option value="2">Bạn bè</option>
						</Field>
					</div>

					<div className="form-group">
						<Editor
							apiKey="your-api-key"
							onInit={(evt, editor) => (editorRef.current = editor)}
							initialValue="This is the initial content of the editor"
							init={{
								height: 500,
								menubar: false,
								plugins: [
									"advlist autolink lists link image charmap print preview anchor",
									"searchreplace visualblocks code fullscreen",
									"insertdatetime media table paste code help wordcount",
								],
								toolbar:
									"undo redo | formatselect | " +
									"bold italic backcolor | alignleft aligncenter " +
									"alignright alignjustify | bullist numlist outdent indent | " +
									"removeformat | help",
								content_style:
									"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
							}}
						/>
					</div>

					<div className="form-group">
						<div role="group" aria-labelledby="checkbox-group">
							<label style={{ fontSize: "1.4rem", marginRight: "20px" }}>
								<Field
									style={{ width: "20px", height: "20px", marginRight: "10px" }}
									type="checkbox"
									name="category"
									value="Travel"
								/>
								Travel
							</label>
							<label style={{ fontSize: "1.4rem", marginRight: "20px" }}>
								<Field
									style={{ width: "20px", height: "20px", marginRight: "10px" }}
									type="checkbox"
									name="category"
									value="Sport"
								/>
								Sport
							</label>
							<label style={{ fontSize: "1.4rem", marginRight: "20px" }}>
								<Field
									style={{ width: "20px", height: "20px", marginRight: "10px" }}
									type="checkbox"
									name="category"
									value="Drink"
								/>
								Drink
							</label>
						</div>
					</div>

					<button className="btn mt-5" type="submit">
						Post
					</button>
				</Form>
			</Formik>
		</div>
	);
}

export default CreatePost;
