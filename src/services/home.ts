import { graphQLClient } from "@/lib/api";
import { aboutMeQuery } from "@/queries/aboutMe";
import { certificatesQuery } from "@/queries/certificates";
import { competencesQuery } from "@/queries/competences";
import { projectsQuery } from "@/queries/projects";
import { recommendationsQuery } from "@/queries/recommendations";
import { servicesQuery } from "@/queries/services";
import type {
  AboutMe,
  Certificates,
  Competences,
  Projects,
  Recommendations,
  Services,
} from "@/types/storyblok";
import { getQueryLocale } from "@/utils/storyblok";

const getAboutMe = async (): Promise<AboutMe> => {
  return await graphQLClient.request(aboutMeQuery, getQueryLocale());
};

const getCompetences = async (): Promise<Competences> => {
  return await graphQLClient.request(competencesQuery, getQueryLocale());
};

const getServices = async (): Promise<Services> => {
  return await graphQLClient.request(servicesQuery, getQueryLocale());
};

const getCertificates = async (): Promise<Certificates> => {
  return await graphQLClient.request(certificatesQuery, getQueryLocale());
};

const getProjects = async (): Promise<Projects> => {
  return await graphQLClient.request(projectsQuery, getQueryLocale());
};
const getRecommendations = async (): Promise<Recommendations> => {
  return await graphQLClient.request(recommendationsQuery, getQueryLocale());
};

const homeService = {
  getAboutMe,
  getCompetences,
  getServices,
  getCertificates,
  getProjects,
  getRecommendations,
};

export default homeService;
