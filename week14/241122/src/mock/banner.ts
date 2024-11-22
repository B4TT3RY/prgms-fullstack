import { Banner } from "@/models/banner.model";
import { http, HttpResponse } from "msw";

const bannersData: Banner[] = [
  {
    id: 1,
    title: "배너 1",
    description: "Banner 1 description",
    image: "https://picsum.photos/id/111/1200/400",
    url: "https://some.url",
    target: "_blank",
  },
  {
    id: 2,
    title: "배너 2",
    description: "Banner 2 description",
    image: "https://picsum.photos/id/222/1200/400",
    url: "https://some.url",
    target: "_blank",
  },
  {
    id: 3,
    title: "배너 3",
    description: "Banner 3 description",
    image: "https://picsum.photos/id/123/1200/400",
    url: "https://some.url",
    target: "_blank",
  },
];

export const banners = http.get("http://localhost:3000/banners", () => {
  return HttpResponse.json(bannersData, {
    status: 200,
  });
});