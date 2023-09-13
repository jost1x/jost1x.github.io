import {
  SiArduino,
  SiGit,
  SiJavascript,
  SiMariadb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiWordpress,
  SiDocker,
  SiStmicroelectronics,
  SiReact,
  SiNodered,
  SiDirectus,
  SiGrafana,
  SiEspressif,
  SiLinux,
  SiTraefikproxy,
  SiUbiquiti,
  SiMikrotik,
  SiAmazonaws,
  SiGooglecloud,
  SiDigitalocean,
  SiMicrosoftoffice,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiBun,
  SiVite,
  SiInfluxdb,
  SiMqtt,
  SiRaspberrypi,
  SiGitlab,
  SiTasmota,
  SiHomeassistant,
  SiFastapi,
  SiPydantic,
  SiFlask,
} from "@icons-pack/react-simple-icons";
import { ReactComponent as PlatformIO } from "../assets/platformio.svg";

interface Skill {
  [key: string]: object;
}
export const _skills: Skill = {
  Python: <SiPython />,
  JavaScript: <SiJavascript />,
  Arduino: <SiArduino />,
  PlatformIO: <PlatformIO />,
  MySQL: <SiMysql />,
  MariaDB: <SiMariadb />,
  PHP: <SiPhp />,
  PostgreSQL: <SiPostgresql />,
  Git: <SiGit />,
  WordPress: <SiWordpress />,
  Docker: <SiDocker />,
  STM: <SiStmicroelectronics />,
  React: <SiReact />,
  Directus: <SiDirectus />,
  Grafana: <SiGrafana />,
  NodeRED: <SiNodered />,
  Espressif: <SiEspressif />,
  Linux: <SiLinux />,
  Traefik: <SiTraefikproxy />,
  Ubiquiti: <SiUbiquiti />,
  Mikrotik: <SiMikrotik />,
  AWS: <SiAmazonaws />,
  GCP: <SiGooglecloud />,
  DigitalOcean: <SiDigitalocean />,
  Office: <SiMicrosoftoffice />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  NodeJS: <SiNodedotjs />,
  Bun: <SiBun />,
  Vite: <SiVite />,
  InfluxDB: <SiInfluxdb />,
  MQTT: <SiMqtt />,
  RaspberryPI: <SiRaspberrypi />,
  GitLab: <SiGitlab />,
  Tasmota: <SiTasmota />,
  "Home Assistant": <SiHomeassistant />,
  Flask: <SiFlask />,
  FastAPI: <SiFastapi />,
  Pydantic: <SiPydantic />,
};