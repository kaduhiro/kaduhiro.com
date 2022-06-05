import { VFC, useState, MouseEvent } from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import PhpIcon from '@mui/icons-material/Php';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const actives = [
  {
    icon: HtmlIcon,
    year: new Date().getFullYear() - 2007,
    skill: 'HTML | CSS | JavaScript | TypeScript | jQuery | Vue.js | Nuxt.js | React | Next.js',
  },
  {
    icon: PhpIcon,
    year: new Date().getFullYear() - 2010,
    skill: 'PHP | CakePHP | CodeIgniter',
  },
  {
    icon: DataObjectIcon,
    year: new Date().getFullYear() - 2020,
    skill: 'Go | Gin',
  },
  {
    icon: StorageIcon,
    year: new Date().getFullYear() - 2013,
    skill: 'MySQL | Memcached | Redis',
  },
  {
    icon: LogoDevIcon,
    year: new Date().getFullYear() - 2007,
    skill: 'Linux | Docker | VPS | AWS | Terraform',
  },
];

export type SkillProps = {};

const Skill: VFC<SkillProps> = ({}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div
      id="skill"
      className="bg-white px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h2 className="text-2xl font-bold w-full text-center py-8">スキル</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {actives.map((active, index) => {
          return (
            <div className="text-center" key={index}>
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full text-white bg-blue-500 sm:w-20 sm:h-20">
                {<active.icon fontSize="large" />}
              </div>
              <h6 className="text-4xl font-bold text-blue-900">{active.year}</h6>
              <p className="mb-2 font-bold text-md">Years</p>
              <p className="font-code text-gray-700">{active.skill}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
            <div>
              <h2 className="text-blue-500 text-xl md:text-xl font-bold">パッシブスキル</h2>
              <p className="font-code text-gray-500">C | C++ | Java | Python | Ruby | Ruby on Rails</p>
            </div>
            <Button color="inherit" aria-describedby={id} variant="contained" onClick={handleClick}>
              what is passive ?
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>業務などで経験した事のあるスキル。現在は使用していません。</Typography>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
