export interface AboutMe {
  AboutmeItem: {
    content: {
      title: string;
      description: string;
    };
  };
}
export interface Competences {
  CompetencesItem: {
    content: {
      title: string;
      items: CompetencesItem[];
    };
  };
}

export interface CompetencesItem {
  _uid: string;
  name: string;
  description: string;
  image: {
    filename: string;
  };
}

export interface Services {
  ServicesItem: {
    name: string;
    content: {
      title: string;
      items: ServicesItem[];
    };
  };
}

export interface ServicesItem {
  _uid: string;
  title: string;
  description: string;
  icon: {
    filename: string;
    alt: string;
  };
}

export interface Certificates {
  CertificatesItem: {
    content: {
      title: string;
      items: CertificatesItem[];
    };
  };
}

export interface CertificatesItem {
  _uid: string;
  title: string;
  description: string;
  image: {
    filename: string;
    alt: string;
  };
}

export interface Projects {
  ProjectsItem: {
    content: {
      title: string;
      items: ProjectsItem[];
    };
  };
}

export interface ProjectsItem {
  _uid: string;
  title: string;
  description: string;
  image: {
    filename: string;
    alt: string;
  };
}

export interface Recommendations {
  RecommendationsItem: {
    content: {
      title: string;
      items: RecommendationsItem[];
    };
  };
}

export interface RecommendationsItem {
  _uid: string;
  title: string;
  description: string;
  link: string;
  image: {
    filename: string;
    alt: string;
  };
}
