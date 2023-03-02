
const EditUser = () => {

  return(
    <div className="mt-3">
      <form className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">Names</label>
          <input type="name" name="name" className="form-control" id="name" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" className="form-control" id="email" />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditUser