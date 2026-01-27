import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts } from '../../data/mock';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import ScrollReveal from '../../components/common/ScrollReveal';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const BlogList = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1F4E8D]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {t.blog.title}
              </h1>
              <p className="text-xl text-white/80">{t.blog.subtitle}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={language === 'en' ? post.titleEn : post.titleAr}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F4E8D] text-white text-xs px-3 py-1 rounded-full">
                      {language === 'en' ? post.categoryEn : post.categoryAr}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString(
                          language === 'en' ? 'en-US' : 'ar-KW',
                          { year: 'numeric', month: 'short', day: 'numeric' }
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {language === 'en' ? post.readTimeEn : post.readTimeAr}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {language === 'en' ? post.titleEn : post.titleAr}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {language === 'en' ? post.excerptEn : post.excerptAr}
                    </p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="text-[#1F4E8D] hover:text-[#163d6e] p-0 h-auto"
                      >
                        {t.blog.readMore}
                        <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const { t, language, isRTL } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Post not found' : 'المقال غير موجود'}
          </h1>
          <Link to="/blog">
            <Button>{t.blog.backToBlog}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1F4E8D]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white mb-6 p-0"
              >
                <ArrowLeft className={`h-4 w-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                {t.blog.backToBlog}
              </Button>
            </Link>
            <div className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">
              {language === 'en' ? post.categoryEn : post.categoryAr}
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {language === 'en' ? post.titleEn : post.titleAr}
            </h1>
            <div className="flex items-center gap-4 text-white/70">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString(
                  language === 'en' ? 'en-US' : 'ar-KW',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {language === 'en' ? post.readTimeEn : post.readTimeAr}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={language === 'en' ? post.titleEn : post.titleAr}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: language === 'en' ? post.contentEn : post.contentAr,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const Blog = () => {
  const { slug } = useParams();
  return slug ? <BlogPost /> : <BlogList />;
};

export default Blog;
