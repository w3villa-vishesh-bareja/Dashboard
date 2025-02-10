import { Link } from "react-router-dom";
import { useState } from "react";

function SideBarMenu({ heading, options, isSelected, setIsSelected }) {
  const [openMenus, setOpenMenus] = useState({});

  const onClickHandler = (text , route) => {
    setIsSelected(text);
    console.log(route);
  };

  return (
    <div className="transition-all duration-500 ease-in-out">
      <div className="uppercase text-xs my-3 font-extrabold tracking-wide text-gray-400">
        {heading}
      </div>
      <div className="text-sm font-medium space-y-1">
        {options.map((obj, i) => (
          <div key={i}>
            {obj.route ? (
              <Link
                to={obj.route}
                onClick={() => onClickHandler(obj.text , obj.route)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer shadow-sm transition-transform transform hover:scale-105 ${
                  isSelected === obj.text
                    ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-white"
                    : "hover:bg-gray-800 hover:text-white text-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{obj.icon}</div>
                  <div>{obj.text}</div>
                </div>
                {obj.subOptions && (
                  <div
                    className={`transform transition-transform ${
                      openMenus[obj.text] ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    ▶
                  </div>
                )}
              </Link>
            ) : (
              <div
                onClick={() => onClickHandler(obj.text, obj.subOptions)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer shadow-sm transition-transform transform hover:scale-105 ${
                  isSelected === obj.text
                    ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-white"
                    : "hover:bg-gray-800 hover:text-white text-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{obj.icon}</div>
                  <div>{obj.text}</div>
                </div>
                {obj.subOptions && (
                  <div
                    className={`transform transition-transform ${
                      openMenus[obj.text] ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    ▶
                  </div>
                )}
              </div>
            )}

            {obj.subOptions && (
              <div
                className="ml-8 overflow-hidden transition-all duration-300 border-l-2 border-gray-700 pl-4"
                style={{ height: openMenus[obj.text] ? "auto" : "0" }}
              >
                <SideBarMenu
                  options={obj.subOptions}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarMenu;
