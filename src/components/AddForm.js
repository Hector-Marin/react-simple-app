import React, {Component} from 'react';


const AddForm = ({onChange, onSubmit, form}) => (
    <div>
        <form 
            onSubmit={onSubmit}
        >
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    name="title"
                    onChange={onChange}
                    value={form.title || ""}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="description"
                    onChange={onChange}
                    value={form.description || ""}
                />
            </div>
            <div className="form-group">
                <input
                    type="file"
                    className="form-control"
                    placeholder="image"
                    name="image"
                    onChange={onChange}
                    value={form.image || ""}
                />
            </div>
            <div className="form-group">
                <input
                    type="color"
                    className="form-control"
                    placeholder="color"
                    name="color"
                    onChange={onChange}
                    value={form.color || ""}
                />
            </div>
            <button 
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    </div>
)

export default AddForm;