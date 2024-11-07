
const Footer = () => {
  return (
    <>
    <footer className="bg-body-tertiary text-center text-lg-start">
  <div className="container p-4 pb-0">
    <form action="">
      <div className="row">
        <div className="col-auto mb-4 mb-md-0">
          <p className="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div className="col-md-5 col-12 mb-4 mb-md-0">
          <div data-mdb-input-init className="form-outline mb-4">
            <input type="email" id="form5Example22" className="form-control" />
            <label className="form-label" >Email address</label>
          </div>
        </div>

        <div className="col-auto mb-4 mb-md-0">
          <button data-mdb-ripple-init type="button" className="btn btn-primary mb-4">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>

  <div className="text-center p-3">
    © 2020 Copyright:
    <a className="text-body" href="#">nghiadvph46437</a>
  </div>
</footer>
    </>
  )
}

export default Footer