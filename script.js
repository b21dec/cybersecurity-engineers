function setEnglish() {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";

  document.querySelector("h1").innerText = "Cybersecurity Engineers";
  document.querySelector(".announcements h2").innerText = "📢 Today's Announcements";
  document.querySelector(".announcements p").innerText = "No announcements at the moment.";

  document.querySelector(".sections h2").innerText = "📚 Sections";
  const items = document.querySelectorAll(".sections li");
  items[0].innerText = "📘 Daily Lectures";
  items[1].innerText = "📂 Handouts & Files";
  items[2].innerText = "🖼️ Images";
  items[3].innerText = "🗓️ Exam Schedules";
  items[4].innerText = "📢 Announcements";
}

function setArabic() {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";

  document.querySelector("h1").innerText = "Cybersecurity Engineers";
  document.querySelector(".announcements h2").innerText = "📢 إعلانات اليوم";
  document.querySelector(".announcements p").innerText = "لا توجد إعلانات حالياً.";

  document.querySelector(".sections h2").innerText = "📚 الأقسام";
  const items = document.querySelectorAll(".sections li");
  items[0].innerText = "📘 المحاضرات اليومية";
  items[1].innerText = "📂 الملازم والملفات";
  items[2].innerText = "🖼️ الصور";
  items[3].innerText = "🗓️ مواعيد الامتحانات";
  items[4].innerText = "📢 الإعلانات والتنبيهات";
}
