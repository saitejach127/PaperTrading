const URL = "http://localhost:5000";

function createCookie(cookieName, cookieValue, hourToExpire) {
  let date = new Date();
  date.setTime(date.getTime() + hourToExpire * 60 * 60 * 1000);
  document.cookie =
    cookieName + " = " + cookieValue + "; expires = " + date.toGMTString();
}

async function sendGet(prefix) {
    var token = getCookie("jwttoken");
    var headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    var response = await fetch(`${URL}/${prefix}`,{
        headers : headers
    });
    return await response.json();
}

async function sendPost(prefix, body) {
  var response = await fetch(`${URL}/${prefix}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}

function setCookie(key, value) {
  createCookie(key, value, 1000000);
}

function getCookie(key) {
    if(!document.cookie.split(';').some((item) => item.trim().startsWith(`${key}=`))) return null;
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    .split("=")[1];
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export { sendPost, sendGet, getCookie, setCookie, deleteCookie };
