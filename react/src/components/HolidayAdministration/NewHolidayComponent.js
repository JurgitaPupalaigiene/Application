import React from 'react'

const NewProductComponet = (props) => {

    return (
        <form >
            <div className="form-row">
                <div className="col-md-12 mb-12">
                    <p>{props.fromMenu}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Sventes pavadinimas</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Holiday title" value={props.title} required onChange={props.handleChangeOfTitle}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault02">Nuotrauka</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="Image" value={props.image}required onChange={props.handleChangeOfImage}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault03">Aprasymas</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="Description" value={props.description}required onChange={props.handleChangeOfDescription}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault04">Tipas</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="Type" value={props.type}required onChange={props.handleChangeOfType}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault05">Ar veliava butina?</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="True or false" value={props.quantity}required onChange={props.handleChangeOfFlag}></input>
                </div>f
            </div>
            <button className="btn btn-primary" type="submit" onClick={props.handleSubmit}>Saugoti</button>
        </form>
    );
}

export default NewProductComponet;