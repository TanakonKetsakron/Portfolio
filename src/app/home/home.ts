import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Track = 'all' | 'frontend' | 'iot';

interface SkillCategory {
  title: string;
  items: string[];
}

interface PortfolioProject {
  title: string;
  type: Exclude<Track, 'all'>;
  description: string;
  stack: string[];
  highlight: string;
  repoUrl: string;
  demoUrl: string;
}

interface ExperienceItem {
  period: string;
  role: string;
  details: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly activeTrack = signal<Track>('all');

  readonly skillGroups: SkillCategory[] = [
    {
      title: 'Front-end Development',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'REST API', 'RxJS'],
    },
    {
      title: 'IoT & Mobile Development',
      items: ['ESP32', 'Arduino', 'Flutter/Dart', 'MQ-2 Gas Sensor', 'Firebase Realtime DB', 'LINE Notify', 'Push Notifications'],
    },
    {
      title: 'Tools & DevOps',
      items: ['Git & GitHub', 'Docker', 'Nginx', 'VS Code', 'Figma', 'Postman'],
    },
  ];

  readonly projects: PortfolioProject[] = [
    {
      title: 'Smart Security Alert System',
      type: 'iot',
      description:
        'ระบบเตือนแก๊สรั่วอัจฉริยะ ตรวจจับแก๊สด้วยเซนเซอร์ MQ-2 พร้อมแอปมือถือ Flutter แสดงค่า Real-time, ดูข้อมูลย้อนหลัง, ควบคุมเสียงเปิด/ปิด และแจ้งเตือนบนโทรศัพท์',
      stack: ['ESP32', 'MQ-2 Sensor', 'Flutter', 'Firebase', 'LINE Notify'],
      highlight: 'พัฒนาทั้ง Hardware (ESP32) และ Mobile App (Flutter) ครบวงจร',
      repoUrl: 'https://github.com/TanakonKetsakron/flutter_gas_leak_detector',
      demoUrl: '/iot-demo.html',
    },
    {
      title: 'Air Quality Monitoring App',
      type: 'iot',
      description:
        'แอปพลิเคชัน Flutter สำหรับตรวจสอบคุณภาพอากาศ แสดงค่าเซนเซอร์แบบ Real-time พร้อมกราฟข้อมูลย้อนหลัง',
      stack: ['Flutter', 'Dart', 'Firebase', 'ESP32', 'Air Quality Sensors'],
      highlight: 'Mobile App ที่เชื่อมต่อกับอุปกรณ์ IoT แบบ Real-time',
      repoUrl: 'https://github.com/TanakonKetsakron/Flutter_IOT',
      demoUrl: 'https://github.com/TanakonKetsakron/Flutter_IOT',
    },
    {
      title: 'Angular Portfolio & Learning',
      type: 'frontend',
      description:
        'โปรเจคเรียนรู้และพัฒนา Angular ตั้งแต่เวอร์ชัน 19 รวมถึง Web Application ต่างๆ',
      stack: ['Angular', 'TypeScript', 'RxJS', 'CSS3'],
      highlight: 'เรียนรู้ Framework สมัยใหม่และ Best Practices',
      repoUrl: 'https://github.com/TanakonKetsakron/Angular19',
      demoUrl: 'https://github.com/TanakonKetsakron/Angular19',
    },
    {
      title: 'Web ERP System',
      type: 'frontend',
      description:
        'เว็บไซต์ระบบ ERP สำหรับธุรกิจ รวมถึงหน้าเสนอขาย, ระบบพันธมิตร, และเครื่องคำนวณงบประมาณ',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      highlight: 'ออกแบบ UI/UX สำหรับธุรกิจจริง พร้อมระบบคำนวณงบประมาณ',
      repoUrl: 'https://github.com/TanakonKetsakron/Web_Erp',
      demoUrl: 'https://tanakonketsakron.github.io/Web_Erp/home.html',
    },
    {
      title: 'Docker & DevOps Learning',
      type: 'frontend',
      description:
        'โปรเจคเรียนรู้ Docker และ Nginx สำหรับการ Deploy Web Application',
      stack: ['Docker', 'Nginx', 'PHP', 'DevOps'],
      highlight: 'เรียนรู้ Containerization และ Web Server Configuration',
      repoUrl: 'https://github.com/TanakonKetsakron/Docker',
      demoUrl: 'https://github.com/TanakonKetsakron/nginx101',
    },
  ];

  readonly experiences: ExperienceItem[] = [
    {
      period: 'มิ.ย. 2565 - ปัจจุบัน',
      role: 'นักศึกษา IT ปี 4',
      details: 'มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน สาขาเทคโนโลยีสารสนเทศ กำลังเตรียมตัวสำหรับการฝึกสหกิจศึกษา',
    },
    {
      period: 'ต.ค. 2568 - มี.ค. 2569',
      role: 'พัฒนา Smart Security Alert System',
      details: 'โปรเจคระบบเตือนแก๊สรั่วอัจฉริยะ ครบวงจรทั้ง Hardware (ESP32) และ Mobile App (Flutter) พร้อมระบบแจ้งเตือน LINE Notify',
    },
    {
      period: 'ก.พ. - มี.ค. 2569',
      role: 'พัฒนา Web ERP & DevOps',
      details: 'สร้างเว็บไซต์ระบบ ERP พร้อมเรียนรู้ Docker, Nginx สำหรับ deployment',
    },
    {
      period: 'มี.ค. 2568',
      role: 'เริ่มต้นพัฒนา Web Projects',
      details: 'ศึกษา JavaScript, HTML/CSS และสร้าง projects แรกๆ บน GitHub',
    },
  ];

  readonly filteredProjects = computed(() => {
    const currentTrack = this.activeTrack();
    if (currentTrack === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.type === currentTrack);
  });

  setTrack(track: Track): void {
    this.activeTrack.set(track);
  }
}
