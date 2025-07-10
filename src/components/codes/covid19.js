const covid19 = (

`{
 "cells": [
  {
   "cell_type": "markdown",
   "id": "19710693",
   "metadata": {
    "papermill": {
     "duration": 0.004671,
     "end_time": "2023-12-22T11:00:20.450506",
     "exception": false,
     "start_time": "2023-12-22T11:00:20.445835",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "# Import Libraries"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "c53642c1-c263-4d1f-a6d4-c23176897e53",
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Collecting wordcloud\n",
      "  Downloading wordcloud-1.9.3-cp311-cp311-win_amd64.whl (300 kB)\n",
      "                                              0.0/300.2 kB ? eta -:--:--\n",
      "     ---------------                        122.9/300.2 kB 2.4 MB/s eta 0:00:01\n",
      "     -------------------------------------- 300.2/300.2 kB 3.1 MB/s eta 0:00:00\n",
      "Requirement already satisfied: numpy>=1.6.1 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from wordcloud) (1.24.3)\n",
      "Requirement already satisfied: pillow in c:\\users\\asus\\anaconda3\\lib\\site-packages (from wordcloud) (10.1.0)\n",
      "Requirement already satisfied: matplotlib in c:\\users\\asus\\anaconda3\\lib\\site-packages (from wordcloud) (3.7.1)\n",
      "Requirement already satisfied: contourpy>=1.0.1 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from matplotlib->wordcloud) (1.0.5)\n",
      "Requirement already satisfied: cycler>=0.10 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from matplotlib->wordcloud) (0.11.0)\n",
      "Requirement already satisfied: fonttools>=4.22.0 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from matplotlib->wordcloud) (4.25.0)\n",
      "Requirement already satisfied: kiwisolver>=1.0.1 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from matplotlib->wordcloud) (1.4.4)\n",
      "Requirement already satisfied: packaging>=20.0 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from matplotlib->wordcloud) (23.0)\n",
      "Requirement already satisfied: pyparsing>=2.3.1 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from matplotlib->wordcloud) (3.0.9)\n",
      "Requirement already satisfied: python-dateutil>=2.7 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from matplotlib->wordcloud) (2.8.2)\n",
      "Requirement already satisfied: six>=1.5 in c:\\users\\asus\\anaconda3\\lib\\site-packages (from python-dateutil>=2.7->matplotlib->wordcloud) (1.16.0)\n",
      "Installing collected packages: wordcloud\n",
      "Successfully installed wordcloud-1.9.3\n"
     ]
    }
   ],
   "source": [
    "!pip install wordcloud"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "id": "41ee1db8",
   "metadata": {
    "papermill": {
     "duration": 2.711465,
     "end_time": "2023-12-22T11:00:23.166824",
     "exception": false,
     "start_time": "2023-12-22T11:00:20.455359",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import seaborn as sns\n",
    "import matplotlib.pyplot as plt\n",
    "from nltk.sentiment.vader import SentimentIntensityAnalyzer\n",
    "from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "244b2241",
   "metadata": {
    "papermill": {
     "duration": 0.004685,
     "end_time": "2023-12-22T11:00:23.176846",
     "exception": false,
     "start_time": "2023-12-22T11:00:23.172161",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "# Read Data"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "id": "d96440bf",
   "metadata": {
    "papermill": {
     "duration": 0.97526,
     "end_time": "2023-12-22T11:00:24.157106",
     "exception": false,
     "start_time": "2023-12-22T11:00:23.181846",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [],
   "source": [
    "data = pd.read_csv(\"Dataset-SA.csv\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "id": "012fe155",
   "metadata": {
    "papermill": {
     "duration": 0.03017,
     "end_time": "2023-12-22T11:00:24.192970",
     "exception": false,
     "start_time": "2023-12-22T11:00:24.162800",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "                                        product_name product_price Rate  \\\n",
      "0  Candes 12 L Room/Personal Air Cooler??????(Whi...          3999    5   \n",
      "1  Candes 12 L Room/Personal Air Cooler??????(Whi...          3999    5   \n",
      "2  Candes 12 L Room/Personal Air Cooler??????(Whi...          3999    3   \n",
      "3  Candes 12 L Room/Personal Air Cooler??????(Whi...          3999    1   \n",
      "4  Candes 12 L Room/Personal Air Cooler??????(Whi...          3999    3   \n",
      "\n",
      "            Review                                            Summary  \\\n",
      "0           super!  great cooler excellent air flow and for this p...   \n",
      "1          awesome              best budget 2 fit cooler nice cooling   \n",
      "2             fair  the quality is good but the power of air is de...   \n",
      "3  useless product                  very bad product its a only a fan   \n",
      "4             fair                                      ok ok product   \n",
      "\n",
      "  Sentiment  \n",
      "0  positive  \n",
      "1  positive  \n",
      "2  positive  \n",
      "3  negative  \n",
      "4   neutral  \n"
     ]
    }
   ],
   "source": [
    "print(data.head())"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "67742927",
   "metadata": {
    "papermill": {
     "duration": 0.004905,
     "end_time": "2023-12-22T11:00:24.203174",
     "exception": false,
     "start_time": "2023-12-22T11:00:24.198269",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "- This dataset contains only three columns. Let’s have a look at whether any of these columns contains missing values or not:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "id": "14408190",
   "metadata": {
    "papermill": {
     "duration": 0.21432,
     "end_time": "2023-12-22T11:00:24.422660",
     "exception": false,
     "start_time": "2023-12-22T11:00:24.208340",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "product_name         0\n",
      "product_price        0\n",
      "Rate                 0\n",
      "Review           24664\n",
      "Summary             11\n",
      "Sentiment            0\n",
      "dtype: int64\n"
     ]
    }
   ],
   "source": [
    "print(data.isnull().sum())"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "29caab1c",
   "metadata": {
    "papermill": {
     "duration": 0.004825,
     "end_time": "2023-12-22T11:00:24.432800",
     "exception": false,
     "start_time": "2023-12-22T11:00:24.427975",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "- So the dataset does not have any null values. As this is the task of sentiment analysis of Flipkart reviews, I will clean and prepare the column containing reviews before heading to sentiment analysis:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 12,
   "id": "5d128f5d",
   "metadata": {
    "papermill": {
     "duration": 8.224893,
     "end_time": "2023-12-22T11:00:32.662996",
     "exception": false,
     "start_time": "2023-12-22T11:00:24.438103",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "[nltk_data] Downloading package stopwords to\n",
      "[nltk_data]     C:\\Users\\Asus\\AppData\\Roaming\\nltk_data...\n",
      "[nltk_data]   Package stopwords is already up-to-date!\n"
     ]
    }
   ],
   "source": [
    "import nltk\n",
    "import re\n",
    "nltk.download('stopwords')\n",
    "stemmer = nltk.SnowballStemmer(\"english\")\n",
    "from nltk.corpus import stopwords\n",
    "import string\n",
    "stopword=set(stopwords.words('english'))\n",
    "\n",
    "def clean(text):\n",
    "    text = str(text).lower()\n",
    "    text = re.sub('\\[.*?\\]', '', text)\n",
    "    text = re.sub('https?://\\S+|www\\.\\S+', '', text)\n",
    "    text = re.sub('<.*?>+', '', text)\n",
    "    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)\n",
    "    text = re.sub('\\n', '', text)\n",
    "    text = re.sub('\\w*\\d\\w*', '', text)\n",
    "    text = [word for word in text.split(' ') if word not in stopword]\n",
    "    text=\" \".join(text)\n",
    "    text = [stemmer.stem(word) for word in text.split(' ')]\n",
    "    text=\" \".join(text)\n",
    "    return text\n",
    "data[\"Review\"] = data[\"Review\"].apply(clean)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "24808b73",
   "metadata": {
    "papermill": {
     "duration": 0.006407,
     "end_time": "2023-12-22T11:00:32.674916",
     "exception": false,
     "start_time": "2023-12-22T11:00:32.668509",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "# Sentiment Analysis of Flipkart Reviews\n",
    "\n",
    "- The Rating column of the data contains the ratings given by every reviewer. So let’s have a look at how most of the people rate the products they buy from Flipkart:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 13,
   "id": "f45d6bc6",
   "metadata": {
    "papermill": {
     "duration": 2.806783,
     "end_time": "2023-12-22T11:00:35.487038",
     "exception": false,
     "start_time": "2023-12-22T11:00:32.680255",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [
    {
     "ename": "KeyError",
     "evalue": "'Rate'",
     "output_type": "error",
     "traceback": [
      "\u001b[1;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[1;31mKeyError\u001b[0m                                  Traceback (most recent call last)",
      "File \u001b[1;32m~\\anaconda3\\Lib\\site-packages\\pandas\\core\\indexes\\base.py:3802\u001b[0m, in \u001b[0;36mIndex.get_loc\u001b[1;34m(self, key, method, tolerance)\u001b[0m\n\u001b[0;32m   3801\u001b[0m \u001b[38;5;28;01mtry\u001b[39;00m:\n\u001b[1;32m-> 3802\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_engine\u001b[38;5;241m.\u001b[39mget_loc(casted_key)\n\u001b[0;32m   3803\u001b[0m \u001b[38;5;28;01mexcept\u001b[39;00m \u001b[38;5;167;01mKeyError\u001b[39;00m \u001b[38;5;28;01mas\u001b[39;00m err:\n",
      "File \u001b[1;32m~\\anaconda3\\Lib\\site-packages\\pandas\\_libs\\index.pyx:138\u001b[0m, in \u001b[0;36mpandas._libs.index.IndexEngine.get_loc\u001b[1;34m()\u001b[0m\n",
      "File \u001b[1;32m~\\anaconda3\\Lib\\site-packages\\pandas\\_libs\\index.pyx:165\u001b[0m, in \u001b[0;36mpandas._libs.index.IndexEngine.get_loc\u001b[1;34m()\u001b[0m\n",
      "File \u001b[1;32mpandas\\_libs\\hashtable_class_helper.pxi:5745\u001b[0m, in \u001b[0;36mpandas._libs.hashtable.PyObjectHashTable.get_item\u001b[1;34m()\u001b[0m\n",
      "File \u001b[1;32mpandas\\_libs\\hashtable_class_helper.pxi:5753\u001b[0m, in \u001b[0;36mpandas._libs.hashtable.PyObjectHashTable.get_item\u001b[1;34m()\u001b[0m\n",
      "\u001b[1;31mKeyError\u001b[0m: 'Rate'",
      "\nThe above exception was the direct cause of the following exception:\n",
      "\u001b[1;31mKeyError\u001b[0m                                  Traceback (most recent call last)",
      "Cell \u001b[1;32mIn[13], line 1\u001b[0m\n\u001b[1;32m----> 1\u001b[0m ratings \u001b[38;5;241m=\u001b[39m data[\u001b[38;5;124m\"\u001b[39m\u001b[38;5;124mRate\u001b[39m\u001b[38;5;124m\"\u001b[39m]\u001b[38;5;241m.\u001b[39mvalue_counts()\n\u001b[0;32m      2\u001b[0m numbers \u001b[38;5;241m=\u001b[39m ratings\u001b[38;5;241m.\u001b[39mindex\n\u001b[0;32m      3\u001b[0m quantity \u001b[38;5;241m=\u001b[39m ratings\u001b[38;5;241m.\u001b[39mvalues\n",
      "File \u001b[1;32m~\\anaconda3\\Lib\\site-packages\\pandas\\core\\frame.py:3807\u001b[0m, in \u001b[0;36mDataFrame.__getitem__\u001b[1;34m(self, key)\u001b[0m\n\u001b[0;32m   3805\u001b[0m \u001b[38;5;28;01mif\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mcolumns\u001b[38;5;241m.\u001b[39mnlevels \u001b[38;5;241m>\u001b[39m \u001b[38;5;241m1\u001b[39m:\n\u001b[0;32m   3806\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_getitem_multilevel(key)\n\u001b[1;32m-> 3807\u001b[0m indexer \u001b[38;5;241m=\u001b[39m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mcolumns\u001b[38;5;241m.\u001b[39mget_loc(key)\n\u001b[0;32m   3808\u001b[0m \u001b[38;5;28;01mif\u001b[39;00m is_integer(indexer):\n\u001b[0;32m   3809\u001b[0m     indexer \u001b[38;5;241m=\u001b[39m [indexer]\n",
      "File \u001b[1;32m~\\anaconda3\\Lib\\site-packages\\pandas\\core\\indexes\\base.py:3804\u001b[0m, in \u001b[0;36mIndex.get_loc\u001b[1;34m(self, key, method, tolerance)\u001b[0m\n\u001b[0;32m   3802\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_engine\u001b[38;5;241m.\u001b[39mget_loc(casted_key)\n\u001b[0;32m   3803\u001b[0m \u001b[38;5;28;01mexcept\u001b[39;00m \u001b[38;5;167;01mKeyError\u001b[39;00m \u001b[38;5;28;01mas\u001b[39;00m err:\n\u001b[1;32m-> 3804\u001b[0m     \u001b[38;5;28;01mraise\u001b[39;00m \u001b[38;5;167;01mKeyError\u001b[39;00m(key) \u001b[38;5;28;01mfrom\u001b[39;00m \u001b[38;5;21;01merr\u001b[39;00m\n\u001b[0;32m   3805\u001b[0m \u001b[38;5;28;01mexcept\u001b[39;00m \u001b[38;5;167;01mTypeError\u001b[39;00m:\n\u001b[0;32m   3806\u001b[0m     \u001b[38;5;66;03m# If we have a listlike key, _check_indexing_error will raise\u001b[39;00m\n\u001b[0;32m   3807\u001b[0m     \u001b[38;5;66;03m#  InvalidIndexError. Otherwise we fall through and re-raise\u001b[39;00m\n\u001b[0;32m   3808\u001b[0m     \u001b[38;5;66;03m#  the TypeError.\u001b[39;00m\n\u001b[0;32m   3809\u001b[0m     \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_check_indexing_error(key)\n",
      "\u001b[1;31mKeyError\u001b[0m: 'Rate'"
     ]
    }
   ],
   "source": [
    "ratings = data[\"Rate\"].value_counts()\n",
    "numbers = ratings.index\n",
    "quantity = ratings.values\n",
    "\n",
    "import plotly.express as px\n",
    "figure = px.pie(data, \n",
    "             values=quantity, \n",
    "             names=numbers,hole = 0.5)\n",
    "figure.show()"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "bc22a6aa",
   "metadata": {
    "papermill": {
     "duration": 0.005404,
     "end_time": "2023-12-22T11:00:35.498478",
     "exception": false,
     "start_time": "2023-12-22T11:00:35.493074",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "- So 60% of the reviewers have given 5 out of 5 ratings to the products they buy from Flipkart. \n",
    "\n",
    "- Let’s have a look at the kind of reviews people leave. For this, I will use a word cloud to visualize the most used words in the reviews column:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "44b13e90",
   "metadata": {
    "papermill": {
     "duration": 1.663808,
     "end_time": "2023-12-22T11:00:37.168129",
     "exception": false,
     "start_time": "2023-12-22T11:00:35.504321",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [],
   "source": [
    "text = \" \".join(i for i in data.Review)\n",
    "stopwords = set(STOPWORDS)\n",
    "wordcloud = WordCloud(stopwords=stopwords, \n",
    "                      background_color=\"white\").generate(text)\n",
    "plt.figure( figsize=(15,10))\n",
    "plt.imshow(wordcloud, interpolation='bilinear')\n",
    "plt.axis(\"off\")\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "fcb51afa",
   "metadata": {
    "papermill": {
     "duration": 0.016802,
     "end_time": "2023-12-22T11:00:37.202331",
     "exception": false,
     "start_time": "2023-12-22T11:00:37.185529",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "- Now I will analyze the sentiments of Flipkart reviews by adding three columns in this dataset as Positive, Negative, and Neutral by calculating the sentiment scores of the reviews:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "97197117",
   "metadata": {
    "papermill": {
     "duration": 21.156265,
     "end_time": "2023-12-22T11:00:58.375820",
     "exception": false,
     "start_time": "2023-12-22T11:00:37.219555",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [],
   "source": [
    "nltk.download('vader_lexicon')\n",
    "sentiments = SentimentIntensityAnalyzer()\n",
    "data[\"Positive\"] = [sentiments.polarity_scores(i)[\"pos\"] for i in data[\"Review\"]]\n",
    "data[\"Negative\"] = [sentiments.polarity_scores(i)[\"neg\"] for i in data[\"Review\"]]\n",
    "data[\"Neutral\"] = [sentiments.polarity_scores(i)[\"neu\"] for i in data[\"Review\"]]\n",
    "data = data[[\"Review\", \"Positive\", \"Negative\", \"Neutral\"]]\n",
    "print(data.head())"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "af3a4137",
   "metadata": {
    "papermill": {
     "duration": 0.017101,
     "end_time": "2023-12-22T11:00:58.410801",
     "exception": false,
     "start_time": "2023-12-22T11:00:58.393700",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "- Now let’s see how most of the reviewers think about the products and services of Flipkart:\n",
    "\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "3c871cfa",
   "metadata": {
    "papermill": {
     "duration": 0.087372,
     "end_time": "2023-12-22T11:00:58.515279",
     "exception": false,
     "start_time": "2023-12-22T11:00:58.427907",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [],
   "source": [
    "x = sum(data[\"Positive\"])\n",
    "y = sum(data[\"Negative\"])\n",
    "z = sum(data[\"Neutral\"])\n",
    "\n",
    "def sentiment_score(a, b, c):\n",
    "    if (a>b) and (a>c):\n",
    "        print(\"Positive 😊 \")\n",
    "    elif (b>a) and (b>c):\n",
    "        print(\"Negative 😠 \")\n",
    "    else:\n",
    "        print(\"Neutral 🙂 \")\n",
    "sentiment_score(x, y, z)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "d8364ef4",
   "metadata": {
    "papermill": {
     "duration": 0.016428,
     "end_time": "2023-12-22T11:00:58.548714",
     "exception": false,
     "start_time": "2023-12-22T11:00:58.532286",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "- So most of the reviews are neutral. Let’s have a look at the total of Positive, Negative, and Neutral sentiment scores to find a conclusion about Flipkart reviews:"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 10,
   "id": "066a5a48",
   "metadata": {
    "execution": {
     "iopub.execute_input": "2023-12-22T11:00:58.584710Z",
     "iopub.status.busy": "2023-12-22T11:00:58.584323Z",
     "iopub.status.idle": "2023-12-22T11:00:58.589841Z",
     "shell.execute_reply": "2023-12-22T11:00:58.588601Z"
    },
    "papermill": {
     "duration": 0.026672,
     "end_time": "2023-12-22T11:00:58.592246",
     "exception": false,
     "start_time": "2023-12-22T11:00:58.565574",
     "status": "completed"
    },
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Positive:  76412.76899997835\n",
      "Negative:  7704.235999999504\n",
      "Neutral:  120927.99799999218\n"
     ]
    }
   ],
   "source": [
    "print(\"Positive: \", x)\n",
    "print(\"Negative: \", y)\n",
    "print(\"Neutral: \", z)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 18,
   "id": "a40acac5-c7e3-4971-bd10-64ed92002599",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "positive= float(x/(x+y+z)*100)\n",
    "negative= float(y/(x+y+z)*100)\n",
    "neutral= float(z/(x+y+z)*100)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 19,
   "id": "0dc49e59-1e7d-41a6-92e9-e27952b5d2e2",
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Positive:  37.266340501840716\n",
      "Negative:  3.757339065707751\n",
      "Neutral:  58.97632043245152\n"
     ]
    }
   ],
   "source": [
    "print(\"Positive: \", positive)\n",
    "print(\"Negative: \", negative)\n",
    "print(\"Neutral: \", neutral)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 25,
   "id": "a59eb2c4-f648-48b6-8a7b-62cec3fc855a",
   "metadata": {
    "tags": []
   },
   "outputs": [
    {
     "data": {
      "image/png": "iVBORw0KGgoAAAANSUhEUgAAAgMAAAGLCAYAAABa0JF/AAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjcuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/bCgiHAAAACXBIWXMAAA9hAAAPYQGoP6dpAAA9uklEQVR4nO3deXxU5aH/8c9kD9kTksxkIewg+yKoaEEETXGpglq2qtS9VWndq7XVe2kVrbZU+Elb6wVawRW1Xr3uChVBAQWkgEAMO5E1IWQh6/n9MRCNBBJgcp5zZr5vXvPCZE7OfCeSmW+e85zneCzLshAREZGQFWY6gIiIiJilMiAiIhLiVAZERERCnMqAiIhIiFMZEBERCXEqAyIiIiFOZUBERCTEqQyIiIiEOJUBERGREKcyICIhr3379kybNs10DBFjVAZEpFVNmjQJj8fD1KlTG33+tddew+Px2Jpl9uzZJCcnH/X5ZcuWceONN9qaRcRJVAZEpNXFxMTw6KOPUlxcbDpKk9LT02nTpo3pGCLGqAyISKsbOXIkXq+XRx555JjbLF68mKFDhxIbG0tubi6TJ0+mvLy84f6ioiIuuugiYmNj6dChA/PmzTtqeP+Pf/wjvXv3Ji4ujtzcXH7+859TVlYGwIIFC/jpT3/KgQMH8Hg8eDweHnroIaDxYYLx48czbty4Rtlqampo27Yts2bNAsCyLB577DE6duxIbGwsffv25eWXXw7Ad0rEDJUBEWl14eHhPPzww0yfPp3t27cfdf/q1avJz89nzJgxfPnll7zwwgssWrSIW2+9tWGbq6++mp07d7JgwQLmz5/P3/72N3bv3t1oP2FhYTz55JP85z//Yc6cOXz44Yfcc889AAwZMoRp06aRmJhIUVERRUVF3HXXXUdlmThxIq+//npDiQB45513KC8v5/LLLwfggQceYNasWcycOZM1a9Zw++2385Of/ISFCxcG5PslYjtLRKQVXXPNNdall15qWZZlnXnmmda1115rWZZlvfrqq9aRl6CrrrrKuvHGGxt93ccff2yFhYVZlZWV1rp16yzAWrZsWcP9GzdutADrT3/60zEf+8UXX7TS0tIaPp41a5aVlJR01HZ5eXkN+6murrbatm1r/eMf/2i4f/z48daVV15pWZZllZWVWTExMdbixYsb7eO6666zxo8ff/xvhohDRRjuIiISQh599FHOO+887rzzzkaf//zzzykoKGDu3LkNn7Msi/r6ejZt2sSGDRuIiIhgwIABDfd37tyZlJSURvv56KOPePjhh1m7di2lpaXU1tZy6NAhysvLiYuLa1HGyMhIrrzySubOnctVV11FeXk5//rXv5g3bx4Aa9eu5dChQ5x//vmNvq66upr+/fuf0PdDxClUBkTENkOHDiU/P5/777+fSZMmNXy+vr6em266icmTJx/1Ne3atWP9+vVN7s+yrIb/3rJlCxdeeCE333wzU6ZMITU1lUWLFnHddddRU1NzQjknTpzIsGHD2L17N++99x4xMTGMGjWqISvAm2++SXZ2dqOvi46OPqHHEXEKlQERsdXUqVPp168fXbt2bfjcgAEDWLNmDZ07d27ya7p3705tbS0rVqxg4MCBABQUFFBSUtKwzfLly6mtreWJJ54gLMw/HerFF19stJ+oqCjq6uqazThkyBByc3N54YUXeOutt7jyyiuJiooCoEePHkRHR7N161aGDRt2Qs9dxKlUBkTEVr1792bixIlMnz694XP33nsvZ555Jrfccgs33HADcXFxrFu3jvfee4/p06fTvXt3Ro4cyY033sjMmTOJjIzkzjvvJDY2tmGtgk6dOlFbW8v06dO55JJL+OSTT/jLX/7S6LHbt29PWVkZH3zwAX379qVNmzZNnlLo8XiYMGECf/nLX9iwYQMfffRRw30JCQncdddd3H777dTX13POOedQWlrK4sWLiY+P55prrmml75xIKzI9aUFEgtt3JxAesXnzZis6Otr67kvQ0qVLrfPPP9+Kj4+34uLirD59+li///3vG+7fuXOnNWrUKCs6OtrKy8uz5s2bZ2VkZFh/+ctfGrb54x//aPl8Pis2NtbKz8+3/vGPf1iAVVxc3LDNzTffbKWlpVmA9eCDD1qW1XgC4RFr1qyxACsvL8+qr69vdF99fb315z//2erWrZsVGRlppaenW/n5+dbChQtP7ZslYojHsr5z0E1ExCW2b99Obm4u77//PiNGjDAdR8TVVAZExBU+/PBDysrK6N27N0VFRdxzzz3s2LGDDRs2EBkZaTqeiKtpzoCIuEJNTQ33338/hYWFJCQkMGTIEObOnasiIBIAGhkQEREJcVqOWEREJMSpDIiIiIQ4lQEREZEQpzIgIiIS4lQGREREQpzKgIiISIhTGRAREQlxWnRIJAjUUsuhw3+qDv9p6uM66qinHut7f0a/YoHH8+0tLAzCwyEqqvlbmzYQG+v/OhFxJZUBERc4xCFKKOHAd/6UUtrwhl9H85flPa69pxjQ4/GXgvh4iIvz/52Q4L8lJvo/jtDLjYhT6adTxCFqqGn0Zn/kzb+UUqqoMh3v+CwLysv9t2NJTITUVP8tLc3/d2KiRhREHEBlQMQAC4sSStjFLnazm13sooQSLIJ4dfDSUv9t8+ZvPxcRASkp35aDtDRIT9cogojN9BMnYoNqqtl9+M+RAuD43/btUFsLe/b4b0eEhflLgdcLmZmQ64PIWHMZRUKAyoBIK6ikkm1sY9fhP8UUB/dv/YFUX/9tQVi9GsYlQ2Qk4P3OTeVAJJBUBkQCZD/72XL4zx726M0/ENrEQmLF4Q8OAOsP/3cqkHv4lgZo3oHIqVAZEDlJddRRRBFb2MJWtnKQg6YjBR9vIlDcxB37D99W4R8lOFIMfOhlTeTE6adG5AQc4hBb2coWtrCd7dRQYzpScPOFt2CjSmDD4VsE/kJwpBzocIJIS6gMiDSjlloKKWQDGyiiSMP/dvIdOsEvqAW2Hb55gGygE/5ioJc7kWPRT4fIMexiF+tZz9d8rREAE6KjIeUgJz8fwAK2H75FAu2BzkBmQOKJBBOVAZHvqKSSDYf/FDd5rFps400CT0mAdlYDbDx8SwA64h8xSAzQ/kXcTWVAQl499WxlK+tZzza2UU+96UgC4G2tl6eD+CcersI/SnAa0A5dt01CmcqAhKwyyljDGjawgUoqTceR7/NV2/Aguw7f4oDuQFcg2obHFXEWlQEJOSWUsJKVFFCgUQCnioiAtqU2PmA58Dn+0YKOQA8g2cbHFzFLZUBCxm52s5KVbGaz6SjSnMxkCLOzDBxRy7enKWbhLwXZaFEjCXYqAxL0trGNlaykiCLTUaSlfE4Yqt95+JYE9AU6oFIgwUplQIKShUUhhaxkJfvYZzqOnCivHfMFWuoA8G/gS6AfkIdKgQQblQEJKvXUs571rGIVpZgYZpZTFhYGGU5c2rkEWACk4C8F7VApkGChMiBBYzOb+YzPOMAB01HkVKQnQ0SZ6RTHUQx8xLelIM9oGpFAUBkQ19vLXpawRHMCgoUvBnByGTjiSClIBU7HP+FQxJ1UBsS1yilnKUvZyEbTUSSQvHWmE5yg/cC7+K9/MAitaihupDIgrlNDDatYxZd8SS21puNIIHk84HXifIGW2AbsAHoCffBfD0HEHVQGxDUsLDawgWUso4IK03GkNaQmQZSb/9/WA6uBAmAg/usfaJKhOJ/KgLjCTnayhCU6TTDY+WIhKIpeJbAI+Ao4A0g3G0ekGSoD4mhVVLGEJWxgg+koYgevZTpBgO0F3sR/6eRB6LoH4lQqA+JYhRTyCZ/oIkKhxOeGswhORgH++QRn4V+fQMRZVAbEcSqoYBGLdA2BUJOUALFVplO0okrgQ/wXQhoMxJiNI/IdKgPiKBvYwGIWU42TlqMVW/jigWAuA0cU4r/mwZlAe7NRRA5TGRBHqKCCj/mYLWwxHUVM8ZoOYKdD+Jc2bo+/FGiUQMxSGRDjCilkEYs4xCHTUcQkX7npBAZsBorwF4IOZqNISFMZEGOqqWYRiyigwHQUMS2+DSSEahmsAhbiP3RwBnpZFhP0r06M2M9+3uM9XVRI/LyJ+Jf1DWUb8Z+KOAxINhtFQo7KgNhuAxtYxCItJSzf8oaZTuAQxcAb+E9B7GQ4i4QSlQGxTR11LGYx61hnOoo4jU9rSXyrFviYb+cS6GVaWp/+lYktyijjPd5jD3tMRxGniYmBlFCcPNicAvyHDc5Fhw2ktWlsTlrddrYzn/kqAtI0ry75e2wl+A8bfG04hwQ7jQxIq7Gw+OLwH4tgW3NeAsanl6HjO3LYYD9wOroKorQG/RRKqzjEIT7iI7axzXQUcTqvVptsmTXAAWAoEGU4iwQbHSaQgCuhhFd5VUVAmhcZCWmlplO4yHb8V0HU90wCS2VAAmo3u3md1znIQdNRxA28yXoVOmEH8BeCXaaDSBDRj6EEzFa28gZvaFlhaTlvpOkELlUFvIP/okcip05zBiQg1rOef/NvTRSUE+OrMZ3AxeqBfwMHgb6Gs4jbqQzIKVvBCpaxzHQMcZvwcEjXse9TtwL/VRAHozMN5GSpDMhJs7BYzGLWsMZ0FHGjjGQI19ySwFgH1ABD0NFfORkqA3JS6qjjIz6iUMcs5WR5o0ETTQOoAP+aBENRIZATpTIgJ6yaat7hHYooMh1F3MxXZzpBENqMf4RgOHp5lxOh+ign5BCH+F/+V0VATo3HA5maL9A6dgDv4S8FIi2jMiAtVkUVb/Im+9hnOoq4XdskiNTIQOvZhf/UwyrTQcQlVAakRWqo4S3eUhGQwPC2MZ0gBOwF3gKt+yEtoDIgzaqllrd5m93sNh1FgoWv3nSCEFGC/5CBrv8gx6cyIMdVRx3v8q7mCEhgectMJwgh+4D38Z9pINI0lQE5pnrqeZ/32c5201EkmKQkQox+U7XXbuBDQPM0pGkqA9Kkeur5kA/ZwhbTUSTYeONMJwhRO/EvX6xDNHI0lQE5ioXFQhZqQSFpHT7TAULZFmAx6Boi8j0qA3KURSxiIxtNx5Bg5S03nSDEFQBLTYcQh1EZkEaWsYx1rDMdQ4JVQhzE61Q389bhv8CRiJ/KgDTYyEZW6AVCWpM3wXQCabAK+Np0CHEIlQEBYDe7+Tf/Nh1Dgp1PLznO8glo/RBBZUCAMsp4h3eo02lH0tp8laYTSCP1+E851LoPoU5lIMTVUsu7vEslepGWVhYbA0maPOg8h4AP0IWNQpvKQAizsPiIj9jLXtNRJBT4kkwnkGMqBhaiUw5Dly54HcI+53M2scl0DLHZwpkLWThzIfs2+y865evpI3fQxYzq1euYXzP3s8947N132bhrF0mxsfywZ08ev+IK0uLjAXhv7Vpuee45dpWWclm/fjx91VVERfhfXg5UVjLo4Yd5/9lHaKffPxxsO7AcGGQ6iBign8wQ9TVf8wVfmI4hBiTnJDN66mjuX34/9y+/n+7ndefSp55izc6dTW6/qKCAq2fN4rqzz2bNQw/x0k03sWzLFq7/5z8BqK+vZ+L//A83Dx3K4nvvZenmzTz98ccNX3/vK69w89ChtBuQaMvzk1OxBthgOoQYoJGBELSHPSxggekYYkjfS/o2+viy31/Gp9MW8mlhIT2zso7a/tPCQtqnpTH5vPMA6NC2LTf94Ac89u67AOwtK2PPwYP8/NxziYmM5Ed9+rC2yH9hq08KCli+eTP/75prIFWT1NzhUyAVaGs6iNhIIwMhpoIK3uVdnTkgANTX1bPs+WWUV1dzVseOTW4zpFMntpeU8H+rV2NZFrtKS3n5iy+4qHdvANITEvAlJfHu2rVUVlfzcUEBfXJyqK6t5Wfz5vGXiRMJz0oBj53PTE5ePbAAXfY4tHgsy9KMkRBhYfEWb+kqhMKO1Tt49KxHqTlUQ3R8NC9fdR0XHn5zb8rLn3/OT+fM4VBNDbX19fyob19evukmIsPDAf+hhNtffJG9ZWVc2KsX08aO5ZG33qK4ooLrzzmHG197kb2Vxdx22whuvXWkXU9TTkkeMNx0CLGJykAIWc1qlrDEdAxxgNrqWvZv3U9FSQUr5q9g+YxFLLzzTno0cZhg7c6djJw2jdtHjCC/Z0+KDhzg7vnzGdS+Pc9cfXWT+9+waxcXzZjBil//mqGPP84v776MH47tTK9eD/D++3fTp09uaz9FCYgzge6mQ4gNdJggROxjH0t1cRI5LCIqgozOGbQ/vT2jHxlN35wc/vzhh01u+8jbb3N2p07cnZ9Pn5wc8nv25KkJE/ifTz6h6MCBo7a3LIsbn32WJ664gnrLYsW2bVzx015kZCQybFg3Fi5c39pPTwJmKbDPdAixgcpACKillg/5UPME5Jgsy6KqtrbJ+yqqqwnzND7gH37446YGFp/55BPS4uL4Ud++1NXXA1BT5993TU0ddXX1gYwuraoe//oDWpAo2KkMhIBP+ZRiik3HEId49f5X2fjxRvZu3suO1Tt47devsWDDBiYOHgzAfa++ytWzZjVsf0mfPryyYgUzFy6kcM8ePikoYPILLzC4fXuykpMb7Xt3aSm/+7//48mxYwFIiYvjtA65TJv2LkuWFPDBB+sYMqSzbc9VAqEUWGw6hLQynVoY5LaylbWsNR1DHOTgroPMumoWB4oOEJsUS3afbN6ePJnze/QAoOjAAbbu39+w/aQhQzh46BAzPvqIO196ieQ2bTivWzceHTPmqH3/4sUXuev888lOSWn43Ownb+Wau6fx5JPvc/fdP2Tw4KbPWhAn2wT4gK6mg0gr0QTCIFZBBS/zMofQ9ePl+G78WyvtOCwMJkVDhA5RuV8EcCmgy1AHIx0mCFIWFgtZqCIgZrVNUhEIGrXocEHwUhkIUmtYwza2mY4hoc4bazqBBFQRWq44OKkMBKH97OczPjMdQwR8GhUIPssAXYo62KgMBBkLi4/5WKcRinkeD3h1PYLgUwNavCzoqAwEmQ1sYBe7TMcQgZREiNb56cFpO1BgOoQEkMpAEDnEIR0eEOfwtTGdQFrVUqDCdAgJEJWBILKUpTp7QJzDazqAtK5q/Jc7lmCgMhAkdrOb9WjNd3EQn+YLBL+toLOWgoLKQBCwsFjEIiy0fpQ4RGI8tKkynUJssQz/NQzEzVQGgsAa1rCXvaZjiHzLF286gdimFLTkueupDLhcBRUsZ7npGCKN+TzNbyNBZBVQaTqEnAKVAZf7lE+pptp0DJHGvJplHlpqgC9Mh5BToDLgYjvZSYHO9RWniYuFRP2WGHoKgH2mQ8hJUhlwKQuLJVoFTJzIm2g6gRhhgdY5cS2VAZcqpJB9auHiRL5w0wnEmN1AoekQchJUBlzIwuJzPjcdQ6RpXi18Fdo+B10bxXVUBlyogAJKKDEdQ+Ro0dGQctB0CjGqHNhoOoScoJApA5s3b8bj8bBy5crjbnfuuefyy1/+0pZMJ6Oeeo0KiHN5k/xXK5QQ9yUaHXAXx5WBSZMm4fF48Hg8REZG0rFjR+666y7Ky0/t+tm5ubkUFRXRq1cvABYsWIDH46GkpKTRdq+88gpTpkw5pcdqTRvYQCmlpmOINM0XYTqBOEIFsMF0CDkBjvzJ/eEPf8isWbOoqanh448/5vrrr6e8vJyZM2ee9D7Dw8Pxepu/ckpqaupJP0Zrq6OOL3QurziZV2teyBGrga6AJpS6geNGBgCio6Pxer3k5uYyYcIEJk6cyGuvvUZVVRWTJ08mIyODmJgYzjnnHJYtW9bwdcXFxUycOJH09HRiY2Pp0qULs2bNAhofJti8eTPDhw8HICUlBY/Hw6RJk4DGhwnuu+8+zjzzzKPy9enThwcffLDh41mzZnHaaacRExND9+7deeqpp1rl+7Ke9ZShi7+IQ0VGQFuNWskRGh1wE0eODHxfbGwsNTU13HPPPcyfP585c+aQl5fHY489Rn5+PgUFBaSmpvKb3/yGtWvX8tZbb9G2bVsKCgqorDx68ZPc3Fzmz5/P5Zdfzvr160lMTCQ2Nvao7SZOnMjUqVP5+uuv6dSpEwBr1qxh9erVvPzyywA8/fTTPPjgg8yYMYP+/fuzYsUKbrjhBuLi4rjmmmsC9j2opZYVrAjY/kQCLiMZwlQG5Lu+BLrgkreakObIkYHvWrp0KfPmzWP48OHMnDmTP/zhD4waNYoePXrw9NNPExsbyzPPPAPA1q1b6d+/P6effjrt27dn5MiRXHLJJUftMzw8vOFwQEZGBl6vl6SkpKO269WrF3369GHevHkNn5s7dy6DBg2ia9euAEyZMoUnnniCMWPG0KFDB8aMGcPtt9/OX//614B+H9axjnJObd6ESKvyRZlOII5TiUYH3MGRZeCNN94gPj6emJgYzjrrLIYOHcptt91GTU0NZ599dsN2kZGRDB48mHXr1gHws5/9jOeff55+/fpxzz33sHjx4lPOMnHiRObOnQuAZVk899xzTJw4EYA9e/awbds2rrvuOuLj4xtuv/vd7/j6669P+bGPqKWWlawM2P5EWoW3xnQCcaTVQK3pENIMR47dHBkFiIyMJCsri8jISFatWgWA53unLVmW1fC5UaNGsWXLFt58803ef/99RowYwS233MLjjz9+0lkmTJjAr371K7744gsqKyvZtm0b48aNA6C+3n8N76effpozzjij0deFhwdu0sxXfEWlrggmThYWBhlaX0CaUon/ugXdTQeR43DkyEBcXBydO3cmLy+PyMhIADp37kxUVBSLFi1q2K6mpobly5dz2mmnNXwuPT2dSZMm8eyzzzJt2jT+9re/NfkYUVH+Ic26uuOfC5uTk8PQoUOZO3cuc+fOZeTIkWRmZgKQmZlJdnY2hYWFdO7cudGtQ4cOp/Q9OMLC4j/8JyD7Emk16ckQUW86hTjWWvzXLhCncuTIQFPi4uL42c9+xt13301qairt2rXjscceo6Kiguuuuw6A3/72twwcOJCePXtSVVXFG2+80agofFdeXh4ej4c33niDCy+8kNjYWOLj45vcduLEiTz00ENUV1fzpz/9qdF9Dz30EJMnTyYxMZFRo0ZRVVXF8uXLKS4u5o477jjl572FLVpXQJzPFwM600WOqRTYDuSaDiLH4MiRgWOZOnUql19+OVdddRUDBgygoKCAd955h5SUFMD/2/59991Hnz59GDp0KOHh4Tz//PNN7is7O5v/+q//4le/+hWZmZnceuutx3zcK6+8kn379lFRUcFll13W6L7rr7+ev//978yePZvevXszbNgwZs+eHbCRAY0KiCv4tNqcNGeN6QByHB7LsjR241D72Md85puOISHgxqaPprWMxwPXxEKUJolJcy4B0kyHkCa4amQg1GhUQFwhLUlFQFroK9MB5BhUBhyqiioKKDAdQ6R53qMX7BJpWiFQZTqENEFlwKHWs546XfVL3MBnOoC4Rx26vLEzqQw41DrWmY4g0jJerS8gJ2I9Os3QeVQGHGgHOzjAAdMxRJqXnACxulKhnIiDQJHpEPI9KgMOtJa1piOItIy36bU5RI4vcMu1S2CoDDhMJZVsZrPpGCIto/kCclK2ALqWhZOoDDhMIYVYOp4mbuGrMJ1AXKkW2Go6hHyHyoDDFFJo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",
      "text/plain": [
       "<Figure size 640x480 with 1 Axes>"
      ]
     },
     "metadata": {},
     "output_type": "display_data"
    }
   ],
   "source": [
    "labels = ['Positive', 'Neutral', 'Negative']\n",
    "sizes = [positive,neutral, negative]  # Percentages, should sum to 100\n",
    "\n",
    "# Create a pie chart\n",
    "plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90, colors=['#99ff99','#ffff9f','#ff9999','#ffcc99'])\n",
    "plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.\n",
    "\n",
    "# Display the pie chart\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "0a598159",
   "metadata": {
    "papermill": {
     "duration": 0.016646,
     "end_time": "2023-12-22T11:00:58.625908",
     "exception": false,
     "start_time": "2023-12-22T11:00:58.609262",
     "status": "completed"
    },
    "tags": []
   },
   "source": [
    "# Conclusion\n",
    "\n",
    "- So, most people give Neutral reviews, and a small proportion of people give Negative reviews. So we can say that people are satisfied with Flipkart products and services."
   ]
  }
 ],
 "metadata": {
  "kaggle": {
   "accelerator": "none",
   "dataSources": [
    {
     "datasetId": 2865125,
     "sourceId": 4940809,
     "sourceType": "datasetVersion"
    }
   ],
   "dockerImageVersionId": 30474,
   "isGpuEnabled": false,
   "isInternetEnabled": true,
   "language": "python",
   "sourceType": "notebook"
  },
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.11.3"
  },
  "papermill": {
   "default_parameters": {},
   "duration": 52.62277,
   "end_time": "2023-12-22T11:00:59.868073",
   "environment_variables": {},
   "exception": null,
   "input_path": "__notebook__.ipynb",
   "output_path": "__notebook__.ipynb",
   "parameters": {},
   "start_time": "2023-12-22T11:00:07.245303",
   "version": "2.4.0"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
`

);

export default covid19;