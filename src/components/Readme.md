@root 폴더 내 파일명은 한단어로 제한한다. (다른 컴포넌트와 충돌 방지)
O : badge, X : badge-large

최상단 부모요소의 class명은 해당컴포넌트 경로와 파일명 조합으로 한다.
/popup/example.vue : class="popup-example"
/@root/badge.vue : class="root-badge"
/the/header.vue : class="the-header"