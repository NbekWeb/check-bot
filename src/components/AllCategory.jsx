import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AllCategory = () => {
  const data = [
    { name: "Top of all time", path: "/see?category=all" },
    { name: "New",  path: "/see?category=new"  },
    { name: "Trading",  path: "/see?category=trading"  },
    { name: "Wallets",  path: "/see?category=wallets"  },
    { name: "Copytrade",  path: "/see?category=copytrade"  },
    { name: "Scanners",  path: "/see?category=scanners"  },
    { name: "For chat",  path: "/see?category=for-chat"  },
    { name: "Blacklist", path: "/spam" },
  ];

  const navigate = useNavigate();

  const goPage = (path) => {
    if (!!path) {
      navigate(path);
    }
  };

  return (
    <div className="text-white tr-scrollbar">
      <h2 className="text-3xl font-semibold">All categories </h2>
      <div className="flex flex-col gap-5 mt-5 ">
        {data.map((item, i) => (
          <button
            onClick={() => goPage(item.path)}
            key={i}
            className="flex items-center justify-center w-full text-3xl rounded-2xl h-15 bg-dark-500"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
