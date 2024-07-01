import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCertificates } from "../redux/actions/certificate.action";

const MyCertificates = ({ sidebar }) => {
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const { certificates, loading, error } = useSelector(
    (state) => state.certificates
  );

  useEffect(() => {
    if (userId) {
      dispatch(getCertificates(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="mt-24">
      <div className={`flex ml-4`}>
        <Image
          className="w-[28px] h-[28px]"
          src={require("../assets/award.png")}
        />
        <h1 className=" ml-[4px] text-xl">My Certificates</h1>
      </div>
      <div
        className={`bg-white relative mt-10 ml-4 h-[120px] flex text-center items-center ${
          sidebar ? "w-[1400px]" : "w-[1600px] mr-10 "
        }`}
      >
        <Image
          className="w-[40px] h-[40px] ml-10 mr-6"
          src={require("../assets/award.png")}
        />
        <h1 className="text-3xl font-normal mt-[9px]">
          Jump Into New Certificate
        </h1>
        <Button className="text-white font-medium border rounded-[4px] bg-[#ed2a26] border-[#ed2a26] hover:bg-black px-5 py-[11px] absolute right-14">
          New Certificate
        </Button>
      </div>
      <div className={`mt-24 ml-4 ${sidebar ? "w-[1400px]" : "w-[1600px]"}`}>
        <div className="bg-[#ffecec] flex items-center h-[50px] border-1 border-[#f7f7f7]">
          <h1 className="ml-10">Item No.</h1>
          <h1 className="ml-20">Title</h1>
          <h1 className={`${sidebar ? "ml-[400px]" : "ml-[500px]"}`}>Marks</h1>
          <h1 className="ml-24">Out Of</h1>
          <h1 className="ml-32">Upload Date</h1>
          <h1 className="ml-32">Certificate</h1>
          <h1 className="ml-24">Controls</h1>
        </div>
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white flex items-center relative h-[60px] border-[1px] border-[#f7f7f7] mt-[0.5px]"
          >
            <h1 className="ml-10">{certificate.itemNo}</h1>
            <h1 className="ml-[140px]">{certificate.title}</h1>
            <h1
              className={`absolute ${
                sidebar ? "left-[630px]" : "left-[730px]"
              }`}
            >
              {certificate.marks}
            </h1>
            <h1
              className={`absolute ${
                sidebar ? "left-[766px]" : "left-[865px]"
              }`}
            >
              {certificate.outOf}
            </h1>
            <h1
              className={`absolute ${
                sidebar ? "left-[935px]" : "left-[1035px]"
              }`}
            >
              {certificate.uploadDate}
            </h1>
            <h1
              className={`absolute text-blue-600 cursor-pointer ${
                sidebar ? "left-[1170px]" : "left-[1270px]"
              }`}
            >
              View
            </h1>
            <Image
              className={`w-[20px] h-[20px] absolute ${
                sidebar ? "left-[1340px]" : "left-[1440px]"
              }`}
              src={require("../assets/delete.png")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCertificates;
