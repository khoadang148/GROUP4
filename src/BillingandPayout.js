import { SettingOutlined } from "@ant-design/icons";
import { Select,message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BillingandPayout = () => {
  const navigate = useNavigate();

  const handleAccount = () => {
    navigate("/setting");
  };
  const handleNoti = () => {
    navigate("/notification");
  };
  const handlePrivacy = () => {
    navigate("/privacy");
  };
  const handleApiclients = () => {
    navigate("/apiclient")
  }
  const handleCloseAccount = () => {
    navigate("/closeAccount");
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [isCircleClicked, setIsCircleClicked] = useState(false);
 
  const [showPaypal,setShowPaypal] = useState(false);
 
  const handleCircleClick = () => {
      setIsCircleClicked(!isCircleClicked); 
      setShowPaypal(false)
    
      
  };
  
  const handleShowpaypal = () => {
    setShowPaypal(!showPaypal)
    setShowPayoneer(false)
    setIsCircleClickedd(false);
    setShowSwift(false)
    setIsCircleClickeddd(false);
  }
   
      
  const [showPayoneer, setShowPayoneer] = useState(false);
  const [isCircleClickedd, setIsCircleClickedd] = useState(false);
  const handleCircleClickk = () => {
    
    setShowPayoneer(false)
    setIsCircleClickedd(!isCircleClickedd); 
    
};
  const handleShowPayoneer = () => {
    setShowPayoneer(!showPayoneer);
    setShowPaypal(false);
    setIsCircleClicked(false);
    setShowSwift(false);
    setIsCircleClickeddd(false);
  };


  const [showSwift, setShowSwift] = useState(false);
  const [isCircleClickeddd, setIsCircleClickeddd] = useState(false);
  const handleCircleClickkk = () => {
    
    setShowSwift(false)
    setIsCircleClickeddd(!isCircleClickeddd); 
    
};
  const handleShowSwift = () => {
    setShowSwift(!showSwift);
    setShowPaypal(false);
    setShowPayoneer(false);
    setIsCircleClicked(false);
    setIsCircleClickedd(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Save Changes Successfully',
    });
  };
  return (
    <div className="mt-20 ml-5 bg-[#F7F7F7] ">
      <div className="flex gap-5 items-center  ">
        <SettingOutlined className="text-3xl" />
        <h3 className="text-2xl mt-2">Setting</h3>
      </div>
      <div className="mt-10 flex">
        <button
          className="p-2 rounded-md  font-medium "
          onClick={handleAccount}
        >
          Account
        </button>
        <button className="p-2 rounded-md  font-medium" onClick={handleNoti}>
          Notification
        </button>
        <button className="p-2 rounded-md  font-medium" onClick={handlePrivacy}>
          Privacy
        </button>
        <button className="p-2 rounded-md  font-medium bg-[#ED2A26]  text-white">
          Billing and Payouts
        </button>
        <button className="p-2 rounded-md  font-medium"  onClick={handleApiclients}>API Clients</button>
        <button className="p-2 rounded-md  font-medium" onClick={handleCloseAccount}>Close Account</button>
      </div>

      <h5 className="mt-12 text-xl">Close account</h5>
      
      <span className=" font-light">
        Want to charge for a course? Provide your payment info and opt in for
        our promotional programs
      </span>
      {/* ///////////////////////////////// */}
      <div className="mt-12">
        <h5 className=" text-lg">Billing Address</h5>
        {/* ///////////////////////////////// */}
        <div className="flex gap-5 mt-10">
          <input
            placeholder="First Name"
            className="p-3 w-[550px] border border-solid"
          ></input>
          <input
            placeholder="Last Name"
            className="p-3 w-[500px] border border-solid"
          ></input>
        </div>
        {/* ///////////////////////////////// */}
        <div className=" mt-10 items-center">
          <input
            placeholder="Academy Name"
            className="p-3 w-[1070px] border border-solid "
          />
        </div>
        {/* ///////////////////////////////// */}
        <span className="  font-light">Add information about yourself</span>
      </div>
      <Select
        defaultValue="VietNam"
        style={{
          width: 1070,
          marginTop: 40,
          height: 40,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Afghanistan",
            label: "Afghanistan",
          },
          {
            value: "Albania",
            label: "Albania",
          },
          {
            value: "Algeria",
            label: "Algeria",
          },
          {
            value: "American Samoa",
            label: "American Samoa",
          },
          {
            value: "Andorra",
            label: "Andorra",
          },
          {
            value: "Angola",
            label: "Angola",
          },
          {
            value: "Anguilla",
            label: "Anguilla",
          },
          {
            value: "Antarctica",
            label: "Antarctica",
          },
          {
            value: "Antigua and Barbuda",
            label: "Antigua and Barbuda",
          },
          {
            value: "Argentina",
            label: "Argentina",
          },
          {
            value: "Armenia",
            label: "Armenia",
          },
          {
            value: "Aruba",
            label: "Aruba",
          },
          {
            value: "Australia",
            label: "Australia",
          },
          {
            value: "Austria",
            label: "Austria",
          },
          {
            value: "Azerbaijan",
            label: "Azerbaijan",
          },
          {
            value: "Bahamas",
            label: "Bahamas",
          },
          {
            value: "Bahrain",
            label: "Bahrain",
          },
          {
            value: "Bangladesh",
            label: "Bangladesh",
          },
          {
            value: "Barbados",
            label: "Barbados",
          },
          {
            value: "Belarus",
            label: "Belarus",
          },
          {
            value: "Belgium",
            label: "Belgium",
          },
          {
            value: "Belize",
            label: "Belize",
          },
          {
            value: "Benin",
            label: "Benin",
          },
          {
            value: "Bermuda",
            label: "Bermuda",
          },
          {
            value: "Bhutan",
            label: "Bhutan",
          },
          {
            value: "Bolivia",
            label: "Bolivia",
          },
          {
            value: "Bosnia and Herzegovina",
            label: "Bosnia and Herzegovina",
          },
          {
            value: "Botswana",
            label: "Botswana",
          },
          {
            value: "Brazil",
            label: "Brazil",
          },
          {
            value: "British Virgin Islands",
            label: "British Virgin Islands",
          },
          {
            value: "Brunei",
            label: "Brunei",
          },
          {
            value: "Bulgaria",
            label: "Bulgaria",
          },
          {
            value: "Burkina Faso",
            label: "Burkina Faso",
          },
          {
            value: "Burundi",
            label: "Burundi",
          },
          {
            value: "Cabo Verde",
            label: "Cabo Verde",
          },
          {
            value: "Cambodia",
            label: "Cambodia",
          },
          {
            value: "Cameroon",
            label: "Cameroon",
          },
          {
            value: "Canada",
            label: "Canada",
          },
          {
            value: "Cayman Islands",
            label: "Cayman Islands",
          },
          {
            value: "Central African Republic",
            label: "Central African Republic",
          },
          {
            value: "Chad",
            label: "Chad",
          },
          {
            value: "Chile",
            label: "Chile",
          },
          {
            value: "China",
            label: "China",
          },
          {
            value: "Colombia",
            label: "Colombia",
          },
          {
            value: "Comoros",
            label: "Comoros",
          },
          {
            value: "Congo",
            label: "Congo",
          },
          {
            value: "Cook Islands",
            label: "Cook Islands",
          },
          {
            value: "Costa Rica",
            label: "Costa Rica",
          },
          {
            value: "Croatia",
            label: "Croatia",
          },
          {
            value: "Cuba",
            label: "Cuba",
          },
          {
            value: "Cyprus",
            label: "Cyprus",
          },
          {
            value: "Czech Republic",
            label: "Czech Republic",
          },
          {
            value: "Denmark",
            label: "Denmark",
          },
          {
            value: "Djibouti",
            label: "Djibouti",
          },
          {
            value: "Dominica",
            label: "Dominica",
          },
          {
            value: "Dominican Republic",
            label: "Dominican Republic",
          },
          {
            value: "Ecuador",
            label: "Ecuador",
          },
          {
            value: "Egypt",
            label: "Egypt",
          },
          {
            value: "El Salvador",
            label: "El Salvador",
          },
          {
            value: "Equatorial Guinea",
            label: "Equatorial Guinea",
          },
          {
            value: "Eritrea",
            label: "Eritrea",
          },
          {
            value: "Estonia",
            label: "Estonia",
          },
          {
            value: "Eswatini",
            label: "Eswatini",
          },
          {
            value: "Ethiopia",
            label: "Ethiopia",
          },
          {
            value: "Fiji",
            label: "Fiji",
          },
          {
            value: "Finland",
            label: "Finland",
          },
          {
            value: "France",
            label: "France",
          },
          {
            value: "Gabon",
            label: "Gabon",
          },
          {
            value: "Gambia",
            label: "Gambia",
          },
          {
            value: "Georgia",
            label: "Georgia",
          },
          {
            value: "Germany",
            label: "Germany",
          },
          {
            value: "Ghana",
            label: "Ghana",
          },
          {
            value: "Greece",
            label: "Greece",
          },
          {
            value: "Grenada",
            label: "Grenada",
          },
          {
            value: "Guatemala",
            label: "Guatemala",
          },
          {
            value: "Guinea",
            label: "Guinea",
          },
          {
            value: "Guinea-Bissau",
            label: "Guinea-Bissau",
          },
          {
            value: "Guyana",
            label: "Guyana",
          },
          {
            value: "Haiti",
            label: "Haiti",
          },
          {
            value: "Honduras",
            label: "Honduras",
          },
          {
            value: "Hungary",
            label: "Hungary",
          },
          {
            value: "Iceland",
            label: "Iceland",
          },
          {
            value: "India",
            label: "India",
          },
          {
            value: "Indonesia",
            label: "Indonesia",
          },
          {
            value: "Iran",
            label: "Iran",
          },
          {
            value: "Iraq",
            label: "Iraq",
          },
          {
            value: "Ireland",
            label: "Ireland",
          },
          {
            value: "Israel",
            label: "Israel",
          },
          {
            value: "Italy",
            label: "Italy",
          },
          {
            value: "Jamaica",
            label: "Jamaica",
          },
          {
            value: "Japan",
            label: "Japan",
          },
          {
            value: "Jordan",
            label: "Jordan",
          },
          {
            value: "Kazakhstan",
            label: "Kazakhstan",
          },
          {
            value: "Kenya",
            label: "Kenya",
          },
          {
            value: "Kiribati",
            label: "Kiribati",
          },
          {
            value: "Kuwait",
            label: "Kuwait",
          },
          {
            value: "Kyrgyzstan",
            label: "Kyrgyzstan",
          },
          {
            value: "Laos",
            label: "Laos",
          },
          {
            value: "Latvia",
            label: "Latvia",
          },
          {
            value: "Lebanon",
            label: "Lebanon",
          },
          {
            value: "Lesotho",
            label: "Lesotho",
          },
          {
            value: "Liberia",
            label: "Liberia",
          },
          {
            value: "Libya",
            label: "Libya",
          },
          {
            value: "Liechtenstein",
            label: "Liechtenstein",
          },
          {
            value: "Lithuania",
            label: "Lithuania",
          },
          {
            value: "Luxembourg",
            label: "Luxembourg",
          },
          {
            value: "Madagascar",
            label: "Madagascar",
          },
          {
            value: "Malawi",
            label: "Malawi",
          },
          {
            value: "Malaysia",
            label: "Malaysia",
          },
          {
            value: "Maldives",
            label: "Maldives",
          },
          {
            value: "Mali",
            label: "Mali",
          },
          {
            value: "Malta",
            label: "Malta",
          },
          {
            value: "Marshall Islands",
            label: "Marshall Islands",
          },
          {
            value: "Mauritania",
            label: "Mauritania",
          },
          {
            value: "Mauritius",
            label: "Mauritius",
          },
          {
            value: "Mexico",
            label: "Mexico",
          },
          {
            value: "Micronesia",
            label: "Micronesia",
          },
          {
            value: "Moldova",
            label: "Moldova",
          },
          {
            value: "Monaco",
            label: "Monaco",
          },
          {
            value: "Mongolia",
            label: "Mongolia",
          },
          {
            value: "Montenegro",
            label: "Montenegro",
          },
          {
            value: "Morocco",
            label: "Morocco",
          },
          {
            value: "Mozambique",
            label: "Mozambique",
          },
          {
            value: "Myanmar",
            label: "Myanmar",
          },
          {
            value: "Namibia",
            label: "Namibia",
          },
          {
            value: "Nauru",
            label: "Nauru",
          },
          {
            value: "Nepal",
            label: "Nepal",
          },
          {
            value: "Netherlands",
            label: "Netherlands",
          },
          {
            value: "New Zealand",
            label: "New Zealand",
          },
          {
            value: "Nicaragua",
            label: "Nicaragua",
          },
          {
            value: "Niger",
            label: "Niger",
          },
          {
            value: "Nigeria",
            label: "Nigeria",
          },
          {
            value: "North Korea",
            label: "North Korea",
          },
          {
            value: "North Macedonia",
            label: "North Macedonia",
          },
          {
            value: "Norway",
            label: "Norway",
          },
          {
            value: "Oman",
            label: "Oman",
          },
          {
            value: "Pakistan",
            label: "Pakistan",
          },
          {
            value: "Palau",
            label: "Palau",
          },
          {
            value: "Palestine",
            label: "Palestine",
          },
          {
            value: "Panama",
            label: "Panama",
          },
          {
            value: "Papua New Guinea",
            label: "Papua New Guinea",
          },
          {
            value: "Paraguay",
            label: "Paraguay",
          },
          {
            value: "Peru",
            label: "Peru",
          },
          {
            value: "Philippines",
            label: "Philippines",
          },
          {
            value: "Poland",
            label: "Poland",
          },
          {
            value: "Portugal",
            label: "Portugal",
          },
          {
            value: "Qatar",
            label: "Qatar",
          },
          {
            value: "Romania",
            label: "Romania",
          },
          {
            value: "Russia",
            label: "Russia",
          },
          {
            value: "Rwanda",
            label: "Rwanda",
          },
          {
            value: "Saint Kitts and Nevis",
            label: "Saint Kitts and Nevis",
          },
          {
            value: "Saint Lucia",
            label: "Saint Lucia",
          },
          {
            value: "Saint Vincent and the Grenadines",
            label: "Saint Vincent and the Grenadines",
          },
          {
            value: "Samoa",
            label: "Samoa",
          },
          {
            value: "San Marino",
            label: "San Marino",
          },
          {
            value: "Sao Tome and Principe",
            label: "Sao Tome and Principe",
          },
          {
            value: "Saudi Arabia",
            label: "Saudi Arabia",
          },
          {
            value: "Senegal",
            label: "Senegal",
          },
          {
            value: "Serbia",
            label: "Serbia",
          },
          {
            value: "Seychelles",
            label: "Seychelles",
          },
          {
            value: "Sierra Leone",
            label: "Sierra Leone",
          },
          {
            value: "Singapore",
            label: "Singapore",
          },
          {
            value: "Slovakia",
            label: "Slovakia",
          },
          {
            value: "Slovenia",
            label: "Slovenia",
          },
          {
            value: "Solomon Islands",
            label: "Solomon Islands",
          },
          {
            value: "Somalia",
            label: "Somalia",
          },
          {
            value: "South Africa",
            label: "South Africa",
          },
          {
            value: "South Korea",
            label: "South Korea",
          },
          {
            value: "South Sudan",
            label: "South Sudan",
          },
          {
            value: "Spain",
            label: "Spain",
          },
          {
            value: "Sri Lanka",
            label: "Sri Lanka",
          },
          {
            value: "Sudan",
            label: "Sudan",
          },
          {
            value: "Suriname",
            label: "Suriname",
          },
          {
            value: "Sweden",
            label: "Sweden",
          },
          {
            value: "Switzerland",
            label: "Switzerland",
          },
          {
            value: "Syria",
            label: "Syria",
          },
          {
            value: "Taiwan",
            label: "Taiwan",
          },
          {
            value: "Tajikistan",
            label: "Tajikistan",
          },
          {
            value: "Tanzania",
            label: "Tanzania",
          },
          {
            value: "Thailand",
            label: "Thailand",
          },
          {
            value: "Timor-Leste",
            label: "Timor-Leste",
          },
          {
            value: "Togo",
            label: "Togo",
          },
          {
            value: "Tonga",
            label: "Tonga",
          },
          {
            value: "Trinidad and Tobago",
            label: "Trinidad and Tobago",
          },
          {
            value: "Tunisia",
            label: "Tunisia",
          },
          {
            value: "Turkey",
            label: "Turkey",
          },
          {
            value: "Turkmenistan",
            label: "Turkmenistan",
          },
          {
            value: "Tuvalu",
            label: "Tuvalu",
          },
          {
            value: "Uganda",
            label: "Uganda",
          },
          {
            value: "Ukraine",
            label: "Ukraine",
          },
          {
            value: "United Arab Emirates",
            label: "United Arab Emirates",
          },
          {
            value: "United Kingdom",
            label: "United Kingdom",
          },
          {
            value: "United States",
            label: "United States",
          },
          {
            value: "Uruguay",
            label: "Uruguay",
          },
          {
            value: "Uzbekistan",
            label: "Uzbekistan",
          },
          {
            value: "Vanuatu",
            label: "Vanuatu",
          },
          {
            value: "Vatican City",
            label: "Vatican City",
          },
          {
            value: "Venezuela",
            label: "Venezuela",
          },
          {
            value: "Vietnam",
            label: "Vietnam",
          },
          {
            value: "Yemen",
            label: "Yemen",
          },
          {
            value: "Zambia",
            label: "Zambia",
          },
          {
            value: "Zimbabwe",
            label: "Zimbabwe",
          },
        ]}
      />
      <input
        placeholder="Address Line 1"
        className="mt-10 p-3 w-[1070px] border border-solid"
      ></input>
      <input
        placeholder="Address Line 2"
        className="mt-10 p-3 w-[1070px] border border-solid"
      ></input>
      <input
        placeholder="City"
        className="mt-10 p-3 w-[1070px] border border-solid"
      ></input>
      <input
        placeholder="State/Province/Region"
        className="mt-10 p-3 w-[1070px] border border-solid"
      ></input>
      <input
        placeholder="Zip/Postal Code"
        className="mt-10 p-3 w-[1070px] border border-solid"
      ></input>
      <input
        placeholder="Phone Number"
        className="mt-10 p-3 w-[1070px] border border-solid"
      ></input>
      {/* ///////////////////////////////// */}
      <hr className="h-5 border-gray-400 mt-16" />
      {/* ///////////////////////////////// */}
      <h5 className="mt-8 text-xl">Exclusive Sales</h5>
      <span className=" font-light">
        Sell more of your exclusive products of this type (equal to the amount
        on the left) to get % cut from further exclusive sales.
      </span>
      {/* ///////////////////////////////// */}
      <div className="mt-5 flex gap-28">
        <div className="flex flex-col gap-8 text-green-400 font-semibold text-sm">
          <div >$0</div>
          <div >50%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$2,000</div>
          <div>53%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$8,000</div>
          <div>55%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$18,000</div>
          <div>58%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$40,000</div>
          <div>62%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$75,000</div>
          <div>70%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$100,000</div>
          <div>80%</div>
        </div>
      </div>
       {/* ///////////////////////////////// */}
      <h5 className="mt-8 text-xl">Non-Exclusive Sales</h5>
      <span className=" font-light">
      Sell more of your non-exclusive products of this type (equal to the amount on the left) to get 70% cut from every non-exclusive sales.
      </span>
      {/* ///////////////////////////////// */}
      <div className="mt-5 flex gap-28">
        <div className="flex flex-col gap-8 text-green-400 font-semibold text-sm">
          <div >$0</div>
          <div >30%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$2,000</div>
          <div >30%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$8,000</div>
          <div >30%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$18,000</div>
          <div >30%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$40,000</div>
          <div >30%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$75,000</div>
          <div >30%</div>
        </div>
        <div className="flex flex-col gap-8 font-semibold text-sm">
          <div>$100,000</div>
          <div >30%</div>
        </div>
      </div>
       {/* ///////////////////////////////// */}
      <hr className="h-5 border-gray-400 mt-10" />
       {/* ///////////////////////////////// */}
       <h5 className="mt-8 text-xl">Withrawal Method</h5>
       <div className="flex gap-5">
        <div
          className={`flex gap-3 items-center bg-white p-3 w-[500px] border border-solid cursor-pointer `}
          onClick={() => {
            handleCircleClick();
            handleShowpaypal();
          }}
        >
          <div
            className={`w-[15px] h-[15px] rounded-full border-2 border-gray-300 ${
              isCircleClicked ? 'bg-red-400' : ''
            }`}
          ></div>
          <div>Paypal</div>
        </div>
        <div
         className={`flex gap-3 items-center bg-white p-3 w-[500px] border border-solid cursor-pointer `}
         onClick={() => {
           handleCircleClickk();
           handleShowPayoneer();
         }}
        >
          <div
            className={`w-[15px] h-[15px] rounded-full border-2 border-gray-300 ${
              isCircleClickedd ? 'bg-red-400' : ''
            }`}
          ></div>
          <div>Payoneer</div>
        </div>
        <div  className={`flex gap-3 items-center bg-white p-3 w-[500px] border border-solid cursor-pointer `}
         onClick={() => {
           handleCircleClickkk();
           handleShowSwift();
         }}>
          <div
            className={`w-[15px] h-[15px] rounded-full border-2 border-gray-300 ${
              isCircleClickeddd ? 'bg-red-400' : ''
            }`}
          ></div>
          <div>Swift</div>
        </div>
      </div>
       {/* ///////////////////////////////// */}
      
         <div  c className={`mt-4 p-3 transition-max-height duration-700 ease-in-out ${
          showPaypal ? 'max-h-screen opacity-100 ' : 'max-h-0 opacity-0  overflow-hidden'
        }`}
        style={{ transitionProperty: 'max-height, opacity, transform' }}>
         <h5 className="mt-8 text-xl">Your PayPal Account</h5>
         <h5 className="mt-4 text-sm">Minimum - $50.00</h5>
         <div className="flex gap-1">
          <div>Get paid by credit or debit card, PayPal transfer or even via bank account in just a few clicks. All you need is your email address or mobile number. </div>
          <div className="flex gap-1">
              <div>More about Paypal</div>
              <div>|</div>
              <div>Create an account</div>
             
          </div>
         </div>
         <input placeholder='Email address' className='mt-8 p-3 w-[550px] border border-solid'/>
        
       <div></div>
       <input placeholder='Confirm email address' className='mt-8 p-3 w-[550px] border border-solid'/>
       <div></div>
       <button className='mt-8 mb-8 bg-[#ED2A26] p-[10px]  text-white font-medium rounded-sm hover:bg-black'>Set Payout Account</button>
         </div>
         {/* ///////////////////////////////// */}
         <div
         className={`mt-4 p-3  transition-all duration-700 ease-in-out transform ${
            showPayoneer ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-full overflow-hidden'
          }`}
          style={{ transitionProperty: 'max-height, opacity, transform' }}
      >
        <h5 className="mt-8 text-xl">Your Payoneer Account</h5>
        <h5 className="mt-4 text-sm">Minimum - $50.00</h5>
        <div className="flex gap-1">
          <div>
            Payoneer Prepaid MasterCard® or Global Bank Transfer (Payoneer) offers an easy, convenient and cost effective
            way to get paid.
          </div>
          <div className="flex gap-1">
            <div>More about Payoneer</div>
            <div>|</div>
            <div>Payoneer FAQs</div>
          </div>
        </div>
        <input placeholder="Email address" className="mt-8 p-3 w-[550px] border border-solid" />
        <div></div>
        <input placeholder="Confirm email address" className="mt-8 p-3 w-[550px] border border-solid" />
        <div></div>
        <button className="mt-8 mb-8 bg-[#ED2A26] p-[10px] text-white font-medium rounded-sm hover:bg-black">
          Set Payout Account
        </button>
      </div>
       {/* ///////////////////////////////// */}
       <div
          className={` p-3  transition-all duration-700 ease-in-out transform ${
            showSwift ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-full overflow-hidden'
          }`}
          style={{ transitionProperty: 'max-height, opacity, transform' }}
      >
        <h5 className="mt-8 text-xl">Your SWIFT Account</h5>
        <h5 className="mt-4 text-sm">Minimum - $500.00</h5>
        <div className="flex gap-1">
          <div>
          SWIFT (International Transfer) get paid directly into your bank account. Connected with over 9000 banking organisations, security institutions and customers in more than 200 countries
          </div>
          <div >
            More about Payoneer
          </div>
        </div>
        <input placeholder="Full Name" className="mt-8 p-3 w-[550px] border border-solid" />
        <div></div>
        <input placeholder="Your Address" className="mt-8 p-3 w-[550px] border border-solid" />
        <div></div>
        <Select
        defaultValue="VietNam"
        style={{
          width: 550,
          marginTop: 32,
          height: 40,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Afghanistan",
            label: "Afghanistan",
          },
          {
            value: "Albania",
            label: "Albania",
          },
          {
            value: "Algeria",
            label: "Algeria",
          },
          {
            value: "American Samoa",
            label: "American Samoa",
          },
          {
            value: "Andorra",
            label: "Andorra",
          },
          {
            value: "Angola",
            label: "Angola",
          },
          {
            value: "Anguilla",
            label: "Anguilla",
          },
          {
            value: "Antarctica",
            label: "Antarctica",
          },
          {
            value: "Antigua and Barbuda",
            label: "Antigua and Barbuda",
          },
          {
            value: "Argentina",
            label: "Argentina",
          },
          {
            value: "Armenia",
            label: "Armenia",
          },
          {
            value: "Aruba",
            label: "Aruba",
          },
          {
            value: "Australia",
            label: "Australia",
          },
          {
            value: "Austria",
            label: "Austria",
          },
          {
            value: "Azerbaijan",
            label: "Azerbaijan",
          },
          {
            value: "Bahamas",
            label: "Bahamas",
          },
          {
            value: "Bahrain",
            label: "Bahrain",
          },
          {
            value: "Bangladesh",
            label: "Bangladesh",
          },
          {
            value: "Barbados",
            label: "Barbados",
          },
          {
            value: "Belarus",
            label: "Belarus",
          },
          {
            value: "Belgium",
            label: "Belgium",
          },
          {
            value: "Belize",
            label: "Belize",
          },
          {
            value: "Benin",
            label: "Benin",
          },
          {
            value: "Bermuda",
            label: "Bermuda",
          },
          {
            value: "Bhutan",
            label: "Bhutan",
          },
          {
            value: "Bolivia",
            label: "Bolivia",
          },
          {
            value: "Bosnia and Herzegovina",
            label: "Bosnia and Herzegovina",
          },
          {
            value: "Botswana",
            label: "Botswana",
          },
          {
            value: "Brazil",
            label: "Brazil",
          },
          {
            value: "British Virgin Islands",
            label: "British Virgin Islands",
          },
          {
            value: "Brunei",
            label: "Brunei",
          },
          {
            value: "Bulgaria",
            label: "Bulgaria",
          },
          {
            value: "Burkina Faso",
            label: "Burkina Faso",
          },
          {
            value: "Burundi",
            label: "Burundi",
          },
          {
            value: "Cabo Verde",
            label: "Cabo Verde",
          },
          {
            value: "Cambodia",
            label: "Cambodia",
          },
          {
            value: "Cameroon",
            label: "Cameroon",
          },
          {
            value: "Canada",
            label: "Canada",
          },
          {
            value: "Cayman Islands",
            label: "Cayman Islands",
          },
          {
            value: "Central African Republic",
            label: "Central African Republic",
          },
          {
            value: "Chad",
            label: "Chad",
          },
          {
            value: "Chile",
            label: "Chile",
          },
          {
            value: "China",
            label: "China",
          },
          {
            value: "Colombia",
            label: "Colombia",
          },
          {
            value: "Comoros",
            label: "Comoros",
          },
          {
            value: "Congo",
            label: "Congo",
          },
          {
            value: "Cook Islands",
            label: "Cook Islands",
          },
          {
            value: "Costa Rica",
            label: "Costa Rica",
          },
          {
            value: "Croatia",
            label: "Croatia",
          },
          {
            value: "Cuba",
            label: "Cuba",
          },
          {
            value: "Cyprus",
            label: "Cyprus",
          },
          {
            value: "Czech Republic",
            label: "Czech Republic",
          },
          {
            value: "Denmark",
            label: "Denmark",
          },
          {
            value: "Djibouti",
            label: "Djibouti",
          },
          {
            value: "Dominica",
            label: "Dominica",
          },
          {
            value: "Dominican Republic",
            label: "Dominican Republic",
          },
          {
            value: "Ecuador",
            label: "Ecuador",
          },
          {
            value: "Egypt",
            label: "Egypt",
          },
          {
            value: "El Salvador",
            label: "El Salvador",
          },
          {
            value: "Equatorial Guinea",
            label: "Equatorial Guinea",
          },
          {
            value: "Eritrea",
            label: "Eritrea",
          },
          {
            value: "Estonia",
            label: "Estonia",
          },
          {
            value: "Eswatini",
            label: "Eswatini",
          },
          {
            value: "Ethiopia",
            label: "Ethiopia",
          },
          {
            value: "Fiji",
            label: "Fiji",
          },
          {
            value: "Finland",
            label: "Finland",
          },
          {
            value: "France",
            label: "France",
          },
          {
            value: "Gabon",
            label: "Gabon",
          },
          {
            value: "Gambia",
            label: "Gambia",
          },
          {
            value: "Georgia",
            label: "Georgia",
          },
          {
            value: "Germany",
            label: "Germany",
          },
          {
            value: "Ghana",
            label: "Ghana",
          },
          {
            value: "Greece",
            label: "Greece",
          },
          {
            value: "Grenada",
            label: "Grenada",
          },
          {
            value: "Guatemala",
            label: "Guatemala",
          },
          {
            value: "Guinea",
            label: "Guinea",
          },
          {
            value: "Guinea-Bissau",
            label: "Guinea-Bissau",
          },
          {
            value: "Guyana",
            label: "Guyana",
          },
          {
            value: "Haiti",
            label: "Haiti",
          },
          {
            value: "Honduras",
            label: "Honduras",
          },
          {
            value: "Hungary",
            label: "Hungary",
          },
          {
            value: "Iceland",
            label: "Iceland",
          },
          {
            value: "India",
            label: "India",
          },
          {
            value: "Indonesia",
            label: "Indonesia",
          },
          {
            value: "Iran",
            label: "Iran",
          },
          {
            value: "Iraq",
            label: "Iraq",
          },
          {
            value: "Ireland",
            label: "Ireland",
          },
          {
            value: "Israel",
            label: "Israel",
          },
          {
            value: "Italy",
            label: "Italy",
          },
          {
            value: "Jamaica",
            label: "Jamaica",
          },
          {
            value: "Japan",
            label: "Japan",
          },
          {
            value: "Jordan",
            label: "Jordan",
          },
          {
            value: "Kazakhstan",
            label: "Kazakhstan",
          },
          {
            value: "Kenya",
            label: "Kenya",
          },
          {
            value: "Kiribati",
            label: "Kiribati",
          },
          {
            value: "Kuwait",
            label: "Kuwait",
          },
          {
            value: "Kyrgyzstan",
            label: "Kyrgyzstan",
          },
          {
            value: "Laos",
            label: "Laos",
          },
          {
            value: "Latvia",
            label: "Latvia",
          },
          {
            value: "Lebanon",
            label: "Lebanon",
          },
          {
            value: "Lesotho",
            label: "Lesotho",
          },
          {
            value: "Liberia",
            label: "Liberia",
          },
          {
            value: "Libya",
            label: "Libya",
          },
          {
            value: "Liechtenstein",
            label: "Liechtenstein",
          },
          {
            value: "Lithuania",
            label: "Lithuania",
          },
          {
            value: "Luxembourg",
            label: "Luxembourg",
          },
          {
            value: "Madagascar",
            label: "Madagascar",
          },
          {
            value: "Malawi",
            label: "Malawi",
          },
          {
            value: "Malaysia",
            label: "Malaysia",
          },
          {
            value: "Maldives",
            label: "Maldives",
          },
          {
            value: "Mali",
            label: "Mali",
          },
          {
            value: "Malta",
            label: "Malta",
          },
          {
            value: "Marshall Islands",
            label: "Marshall Islands",
          },
          {
            value: "Mauritania",
            label: "Mauritania",
          },
          {
            value: "Mauritius",
            label: "Mauritius",
          },
          {
            value: "Mexico",
            label: "Mexico",
          },
          {
            value: "Micronesia",
            label: "Micronesia",
          },
          {
            value: "Moldova",
            label: "Moldova",
          },
          {
            value: "Monaco",
            label: "Monaco",
          },
          {
            value: "Mongolia",
            label: "Mongolia",
          },
          {
            value: "Montenegro",
            label: "Montenegro",
          },
          {
            value: "Morocco",
            label: "Morocco",
          },
          {
            value: "Mozambique",
            label: "Mozambique",
          },
          {
            value: "Myanmar",
            label: "Myanmar",
          },
          {
            value: "Namibia",
            label: "Namibia",
          },
          {
            value: "Nauru",
            label: "Nauru",
          },
          {
            value: "Nepal",
            label: "Nepal",
          },
          {
            value: "Netherlands",
            label: "Netherlands",
          },
          {
            value: "New Zealand",
            label: "New Zealand",
          },
          {
            value: "Nicaragua",
            label: "Nicaragua",
          },
          {
            value: "Niger",
            label: "Niger",
          },
          {
            value: "Nigeria",
            label: "Nigeria",
          },
          {
            value: "North Korea",
            label: "North Korea",
          },
          {
            value: "North Macedonia",
            label: "North Macedonia",
          },
          {
            value: "Norway",
            label: "Norway",
          },
          {
            value: "Oman",
            label: "Oman",
          },
          {
            value: "Pakistan",
            label: "Pakistan",
          },
          {
            value: "Palau",
            label: "Palau",
          },
          {
            value: "Palestine",
            label: "Palestine",
          },
          {
            value: "Panama",
            label: "Panama",
          },
          {
            value: "Papua New Guinea",
            label: "Papua New Guinea",
          },
          {
            value: "Paraguay",
            label: "Paraguay",
          },
          {
            value: "Peru",
            label: "Peru",
          },
          {
            value: "Philippines",
            label: "Philippines",
          },
          {
            value: "Poland",
            label: "Poland",
          },
          {
            value: "Portugal",
            label: "Portugal",
          },
          {
            value: "Qatar",
            label: "Qatar",
          },
          {
            value: "Romania",
            label: "Romania",
          },
          {
            value: "Russia",
            label: "Russia",
          },
          {
            value: "Rwanda",
            label: "Rwanda",
          },
          {
            value: "Saint Kitts and Nevis",
            label: "Saint Kitts and Nevis",
          },
          {
            value: "Saint Lucia",
            label: "Saint Lucia",
          },
          {
            value: "Saint Vincent and the Grenadines",
            label: "Saint Vincent and the Grenadines",
          },
          {
            value: "Samoa",
            label: "Samoa",
          },
          {
            value: "San Marino",
            label: "San Marino",
          },
          {
            value: "Sao Tome and Principe",
            label: "Sao Tome and Principe",
          },
          {
            value: "Saudi Arabia",
            label: "Saudi Arabia",
          },
          {
            value: "Senegal",
            label: "Senegal",
          },
          {
            value: "Serbia",
            label: "Serbia",
          },
          {
            value: "Seychelles",
            label: "Seychelles",
          },
          {
            value: "Sierra Leone",
            label: "Sierra Leone",
          },
          {
            value: "Singapore",
            label: "Singapore",
          },
          {
            value: "Slovakia",
            label: "Slovakia",
          },
          {
            value: "Slovenia",
            label: "Slovenia",
          },
          {
            value: "Solomon Islands",
            label: "Solomon Islands",
          },
          {
            value: "Somalia",
            label: "Somalia",
          },
          {
            value: "South Africa",
            label: "South Africa",
          },
          {
            value: "South Korea",
            label: "South Korea",
          },
          {
            value: "South Sudan",
            label: "South Sudan",
          },
          {
            value: "Spain",
            label: "Spain",
          },
          {
            value: "Sri Lanka",
            label: "Sri Lanka",
          },
          {
            value: "Sudan",
            label: "Sudan",
          },
          {
            value: "Suriname",
            label: "Suriname",
          },
          {
            value: "Sweden",
            label: "Sweden",
          },
          {
            value: "Switzerland",
            label: "Switzerland",
          },
          {
            value: "Syria",
            label: "Syria",
          },
          {
            value: "Taiwan",
            label: "Taiwan",
          },
          {
            value: "Tajikistan",
            label: "Tajikistan",
          },
          {
            value: "Tanzania",
            label: "Tanzania",
          },
          {
            value: "Thailand",
            label: "Thailand",
          },
          {
            value: "Timor-Leste",
            label: "Timor-Leste",
          },
          {
            value: "Togo",
            label: "Togo",
          },
          {
            value: "Tonga",
            label: "Tonga",
          },
          {
            value: "Trinidad and Tobago",
            label: "Trinidad and Tobago",
          },
          {
            value: "Tunisia",
            label: "Tunisia",
          },
          {
            value: "Turkey",
            label: "Turkey",
          },
          {
            value: "Turkmenistan",
            label: "Turkmenistan",
          },
          {
            value: "Tuvalu",
            label: "Tuvalu",
          },
          {
            value: "Uganda",
            label: "Uganda",
          },
          {
            value: "Ukraine",
            label: "Ukraine",
          },
          {
            value: "United Arab Emirates",
            label: "United Arab Emirates",
          },
          {
            value: "United Kingdom",
            label: "United Kingdom",
          },
          {
            value: "United States",
            label: "United States",
          },
          {
            value: "Uruguay",
            label: "Uruguay",
          },
          {
            value: "Uzbekistan",
            label: "Uzbekistan",
          },
          {
            value: "Vanuatu",
            label: "Vanuatu",
          },
          {
            value: "Vatican City",
            label: "Vatican City",
          },
          {
            value: "Venezuela",
            label: "Venezuela",
          },
          {
            value: "Vietnam",
            label: "Vietnam",
          },
          {
            value: "Yemen",
            label: "Yemen",
          },
          {
            value: "Zambia",
            label: "Zambia",
          },
          {
            value: "Zimbabwe",
            label: "Zimbabwe",
          },
        ]}
      />
      <div></div>
      <input placeholder="Swift-Code" className="mt-8 p-3 w-[550px] border border-solid" />
      <div></div>
      <input placeholder="Back Account Number" className="mt-8 p-3 w-[550px] border border-solid" />
      <div></div>
      <input placeholder="Back Name" className="mt-8 p-3 w-[550px] border border-solid" />
      <div></div>
      <input placeholder="Back Address" className="mt-8 p-3 w-[550px] border border-solid" />
      <div></div>
        <button className="mt-8 mb-8 bg-[#ED2A26] p-[10px] text-white font-medium rounded-sm hover:bg-black">
          Set Payout Account
        </button>
      </div>

      {contextHolder}
       <button className='mt-8 mb-12 bg-[#ED2A26] p-[10px] w-32 text-white font-medium rounded-sm hover:bg-black' onClick={success}>Save Changes</button>
    </div>
  );
};

export default BillingandPayout;
