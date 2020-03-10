from distutils.core import setup
setup(
    name='gangagsoc',
    packages=['gangagsoc'],
    package_dir={
        'gangagsoc': 'gangagsoc',
    },
    version='1.0',
    license='gpl-3.0',
    description='The Challenge for GSoC 2020 student to particpate in the Ganga project',
    author='Ankit Kumar',
    author_email='ankits.kvmdam@hotmail.com',
    entry_points='''
        [console_scripts]
        gangagsoc=bin.gangagsoc:cli
    ''' ,
    url='https://github.com/ankitskvmdam/GangaGSoC2020',
    keywords=['GSoC', 'Ganga', 'Challenge'],
    scipts=['bin/gangagsoc'],
    install_requires=[
        'pytest',
        'ganga',
        'PyPDF2',
        'pdfminer.six',
        'flask',
        'flask-socketio',
        'python-dotenv',
        'flask-cors',
        'gunicorn',
        'eventlet',
        'Click',
    ],
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: GNU General Public License v3.0',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],
)
