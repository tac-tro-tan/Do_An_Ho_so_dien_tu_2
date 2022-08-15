export const apiLogin = async (acc) => {
  const response = await fetch(
    `https://backendcnpmem.herokuapp.com/api/signin`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(acc),
    }
  );
  let data = await response.json();
  return data;
};
export const apiLoadUsers = async (objPagi) => {
  const response = await fetch(
    `http://localhost:8888/api/ThongTinCaNhan?${objPagi}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};

export const apiCreateCitizen = async (obj) => {
  const response = await fetch(
    `http://localhost:8888/api/createThongTinCaNhan`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  let data = await response.json();
  return data;
};
export const apiUpdateCitizen = async (obj) => {
  const response = await fetch(`http://localhost:8888/api/updateThongTinCaNhan`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  let data = await response.json();
  return data;
};
export const apiDeleteCitizen = async (_id) => {
  const id = {
    _id: _id,
  };
  const response = await fetch(
    `http://localhost:8888/api/deleteThongTinCongDan`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }
  );
  let data = await response.json();
  return data;
};
export const apiAddTienAn = async (obj) => {
  const response = await fetch(`http://localhost:8888/api/createTienAnTienSu`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  let data = await response.json();
  return data;
};
export const apiSearchCmnd = async (cmnd) => {
  const response = await fetch(`http://localhost:8888/api/readThongTinCaNhan`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cmnd: cmnd,
    }),
  });
  let data = await response.json();
  return data;
};

export const apiLoadXinXacNhan = async () => {
  const response = await fetch(`http://localhost:8888/api/XinXacNhan`, {
    method: "Get",
  });
  let data = await response.json();
  return data;
};
export const apiUpdateStatusXinXacNhan = async (obj) => {
  const response = await fetch(`http://localhost:8888/api/updateStatusXinXacNhan`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      obj
    ),
  });
  let data = await response.json();
  return data;
};
export const apireadXinXacNhan = async (_id) => {
  const response = await fetch(`http://localhost:8888/api/readXinXacNhan/${_id}`, {
    method: "Get",
  });
  let data = await response.json();
  return data;
};
export const apiDeleteXinXacNhan = async (_id) => {
  const id = {
    _id: _id,
  };
  const response = await fetch(
    `http://localhost:8888/api/removeXinXacNhan`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }
  );
  let data = await response.json();
  return data;
};
export const apiLoadLichHen = async () => {
  const response = await fetch(`http://localhost:8888/api/LichHen`, {
    method: "Get",
  });
  let data = await response.json();
  return data;
};
export const apiUpdateStatusLichHen = async (obj) => {
  const response = await fetch(`http://localhost:8888/api/updateStatusLichHen`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      obj
    ),
  });
  let data = await response.json();
  return data;
};
export const apiDeleteLichHen = async (_id) => {
  const id = {
    _id: _id,
  };
  const response = await fetch(
    `http://localhost:8888/api/removeLichHen`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }
  );
  let data = await response.json();
  return data;
};
export const apiCreateThongBao = async (obj) => {
  const response = await fetch(`http://localhost:8888/api/createThongBao`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      obj
    ),
  });
  let data = await response.json();
  return data;
};
export const apiloadCanBo = async (objPagi) => {
  const response = await fetch(
    `http://localhost:8888/api/ThongTinCanBo?${objPagi}`,
    {
      method: "GET",
    }
  );
  let data = await response.json();
  return data;
};
export const apiCreateCanBo = async (obj) => {
  const response = await fetch(
    `http://localhost:8888/api/createThongTinCanBo`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  let data = await response.json();
  return data;
};
export const apiUpdateCanBo = async (obj) => {
  const response = await fetch(`http://localhost:8888/api/updateThongTinCanBo`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  let data = await response.json();
  return data;
};
export const apiDeleteStaff = async (_id) => {
  const id = {
    _id: _id,
  };
  const response = await fetch(
    `http://localhost:8888/api/deleteThongTinCanBo`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }
  );
  let data = await response.json();
  return data;
};
export const apiListAllYeuCau = async () => {
  const response = await fetch(
    `http://localhost:8888/api/YeuCauCapTren`,
    {
      method: "Get",
    }
  );
  let data = await response.json();
  return data;
};
export const apiCreateYeuCau = async (obj) => {
  const response = await fetch(
    `http://localhost:8888/api/createYeuCau`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  let data = await response.json();
  return data;
};
export const apiLoadYeuCau = async (obj) => {
  const response = await fetch(
    `http://localhost:8888/api/YeuCauCapTren`,
    {
      method: "Get",
    }
  );
  let data = await response.json();
  return data;
};
export const apiLoadGopY = async () => {
  const response = await fetch(`http://localhost:8888/api/GopY`, {
    method: "Get",
  });
  let data = await response.json();
  return data;
};
export const apiDeleteGopY = async (id) => {
  const response = await fetch(
    `http://localhost:8888/api/removeGopY`,
    {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id : id,
      }),
    }
  );
  let data = await response.json();
  return data;
};