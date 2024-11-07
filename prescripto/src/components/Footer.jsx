import { assets } from "../assets/assets_frontend/assets"

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* LEFT */}
        <div>
          <img src={assets.logo} alt="logo-footer" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse commodi temporibus magni laudantium numquam quisquam? Ducimus, perferendis doloremque eos accusamus nisi!</p>
        </div>

        {/* CENTER */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-900">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-900">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-222-456-7890</li>
            <li>sodre100ryan@gmail.com</li>
          </ul>
        </div>

      </div>
        {/* COPYRIGHT TEXT */}
        <div>
          <hr />
          <p className="py-5 text-sm text-center text-gray-900">Copyright 2024&copy; Prescripto - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer