// server.js
const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

AWS.config.update({
  region: 'us-east-1', // your region
  credentials: new AWS.Credentials('ASIAYCKIL5MLA3NHGLC4', 'gXzN8Sz0vFUjP7/fr84T7QJSNyNblSJkBuoORL3e'),
});

const quicksight = new AWS.QuickSight();

app.post('/embed-url', async (req, res) => {
  const { userArn, dashboardId, sessionName, filters } = req.body;

  try {
    const params = {
      AwsAccountId: '554739428118',
      DashboardId: dashboardId,
      IdentityType: 'QUICKSIGHT',
      UserArn: userArn,
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
      ResetDisabled: false,
      ...(filters && {
        StatePersistenceEnabled: true,
        ExperienceConfiguration: {
          Dashboard: {
            InitialDashboardVisualId: {
              // Optional: start from a specific visual
              DashboardId: dashboardId,
              SheetId: 'your-sheet-id',
              VisualId: 'your-visual-id',
            },
            FilterControls: filters, // Optional advanced filters
          },
        },
      }),
    };

    const data = await quicksight.generateEmbedUrlForRegisteredUser(params).promise();
    res.json({ embedUrl: data.EmbedUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});