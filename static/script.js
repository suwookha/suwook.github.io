// script.js
document.addEventListener("DOMContentLoaded", function() {
  // JSON 파일 경로
  const jsonFile = "projects.json";

  // 프로젝트 데이터를 읽어오는 함수
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const projectContainer = document.getElementById("projects");
      
      // 프로젝트 데이터를 동적으로 생성
      data.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        projectDiv.innerHTML = `
          <h3>${project.title}</h3>
          <p><strong>설명:</strong> ${project.description}</p>
          <p><strong>기술 스택:</strong> ${project.tech_stack}</p>
          <p><strong>기간:</strong> ${project.duration}</p>
        `;

        projectContainer.appendChild(projectDiv);
      });
    })
    .catch(error => console.error("Error loading projects:", error));
});
