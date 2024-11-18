import React from "react";

const DocumentUploadPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Document Upload</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fssai" className="form-label">FSSAI</label>
                                    <input type="text" className="form-control" id="fssai" placeholder="Enter FSSAI"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pan" className="form-label">Pan (Individual or Organisation)</label>
                                    <input type="text" className="form-control" id="pan" placeholder="Enter Pan"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="legalName" className="form-label">Legal Name (same as Pan)</label>
                                    <input type="text" className="form-control" id="legalName"
                                           placeholder="Enter Legal Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fssaiLicense" className="form-label">FSSAI License (pdf)</label>
                                    <input type="file" className="form-control" id="fssaiLicense" accept=".pdf"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="panFile" className="form-label">Pan (jpg, png or pdf)</label>
                                    <input type="file" className="form-control" id="panFile" accept=".jpg,.png,.pdf"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="proofOfPremises" className="form-label">Proof of Premises
                                        (pdf)</label>
                                    <input type="file" className="form-control" id="proofOfPremises" accept=".pdf"/>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Upload Documents</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentUploadPage;