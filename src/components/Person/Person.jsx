import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <Card className="Person">
      <CardContent className="Person__content">
        <Typography className="Person__name" sx={{ fontSize: 26 }}>
          {`My name is ${name}`}
        </Typography>

        <Typography className="Person__age">
          {age
            ? (`I am ${age}`)
            : (`Age is hidden`
            )}
        </Typography>

        {isMarried
          ? (
            <Typography className="Person__married">
              {`${partnerName} is my ${partner}`}
            </Typography>
          )
          : (
            <Typography className="Person__married">
              I am not married
            </Typography>
          )
        }
      </CardContent>
    </Card>
  );
};
